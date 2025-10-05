import express from "express";
import { register, login, me } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register); // register new user
router.post("/login", login);       // login
router.get("/me", protect, me);     // profile (requires token)

export default router;
