import express from "express";
import {
  authUser,
  logoutUser,
  registerUser,
  getUsers,
  updateUser,
} from "../Controllers/userController.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.get("/", getUsers);
// router.get("/:id", getUser);
router.put("/:id", updateUser);

export default router;
