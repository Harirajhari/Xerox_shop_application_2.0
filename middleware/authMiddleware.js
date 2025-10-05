import jwt from "jsonwebtoken";
import User from "../models/User.js";

/**
 * Protect - verifies JWT and attaches user to req.user
 */
export const protect = async (req, res, next) => {
  let token;

  // Accept token via Authorization header: "Bearer <token>"
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // attach minimal user info, or fetch full user
    const user = await User.findById(decoded.id).select("-password");
    if (!user) return res.status(401).json({ message: "Not authorized" });

    req.user = { id: user._id, role: user.role, email: user.email };
    next();
  } catch (err) {
    console.error("JWT error:", err);
    res.status(401).json({ message: "Token invalid or expired" });
  }
};

/**
 * authorizeRoles(...roles) - middleware factory
 * usage: authorizeRoles("staff", "shop")
 */
export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ message: "Not authorized" });
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden: insufficient role" });
    }
    next();
  };
};
