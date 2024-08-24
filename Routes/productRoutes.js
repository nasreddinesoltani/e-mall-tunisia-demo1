import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../Controllers/productController.js";
import { protect } from "../Middlewares/authMiddleware.js";

const router = express.Router();
router.post("/", createProduct);
router.get("/", getAllProducts);
router.put("/:id", updateProduct);
router.delete("/:id", protect, deleteProduct);

export default router;
