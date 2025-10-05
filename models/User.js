import mongoose from "mongoose";

const handledClassSchema = new mongoose.Schema({
  department: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: String,
    required: true,
    trim: true,
  },
  subjects: [
    {
      type: String,
      trim: true,
    }
  ]
}, { _id: false });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: [true, "Password is required"],
  },

  role: {
    type: String,
    enum: ["student", "staff", "shop"],
    required: true,
  },

  // -----------------------------
  // STUDENT FIELDS
  // -----------------------------
  department: {
    type: String,
    trim: true,
    // only applicable when role === "student"
  },

  year: {
    type: String,
    trim: true,
    // e.g., "1st Year", "2nd Year"
  },

  roll_number: {
    type: String,
    trim: true,
    unique: false, // can be made unique if needed
  },

  // -----------------------------
  // STAFF FIELDS
  // -----------------------------
  handled_classes: [handledClassSchema], // e.g., [{department:"CSE", year:"2nd Year"}]

  designation: {
    type: String,
    trim: true,
  },

  // -----------------------------
  // SHOP FIELDS
  // -----------------------------
  shop_name: {
    type: String,
    trim: true,
  },

  shop_location: {
    type: String,
    trim: true,
  },

  contact_number: {
    type: String,
    trim: true,
  },

  // -----------------------------
  // COMMON FIELDS
  // -----------------------------
  profile_image: {
    type: String,
    default: "",
  },

  is_active: {
    type: Boolean,
    default: true,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },

  updated_at: {
    type: Date,
    default: Date.now,
  }
});

// Auto-update timestamps
userSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

export default mongoose.model("User", userSchema);
