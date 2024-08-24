import express from "express";
import {
  createCart,
  getCart,
  getAllCarts,
  deleteCart,
} from "../Controllers/cartController.js";
import { protect } from "../Middlewares/authMiddleware.js";

const router = express.Router();
router.post("/", protect, createCart);
router.get("/:createdBy", getCart);
router.get("/", getAllCarts);
// router.put("/:id", updateCart);
router.delete("/:id", protect, deleteCart);

export default router;
