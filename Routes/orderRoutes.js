import express from "express";
import stripe from "stripe";
import dotenv from "dotenv";
import cors from "cors";
import { loadStripe } from "@stripe/stripe-js";
import {
  createOrder,
  //   getOrder,
  //   getAllOrders,
  //   deleteOrder,
} from "../Controllers/orderController.js";
import { protect } from "../Middlewares/authMiddleware.js";

const app = express();
dotenv.config();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = express.Router();
router.post("/", protect, createOrder);
// router.get("/:createdBy", protect, getOrder);
// router.get("/", protect, getAllOrders);
// router.put("/:id", protect, updateOrder);
// router.delete("/:id", protect, deleteOrder);
router.post("/create-checkout-session", async (req, res) => {
  const { products } = req.body;
  const lineItems = products.map((product) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.name,
        images: [product.image],
      },
      unit_amount: Math.round(product.price * 100),
    },
    quantity: product.quantity,
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });
  res.json({ id: session.id });
});

export default router;
