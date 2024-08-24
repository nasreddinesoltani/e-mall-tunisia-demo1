import asyncHandler from "express-async-handler";
import Order from "../Models/orderModel.js";
// import Stripe from "@stripe/react-stripe-js";
// import Stripe from "@stripe/stripe-js";
import Stripe from "stripe";

const createOrder = asyncHandler(async (req, res) => {
  const {
    products,
    createdBy,
    subTotal,
    totalAmount,
    status,
    address,
    payment,
  } = req.body;
  try {
    const order = await Order.create({
      products: products,
      createdBy: req.user._id,
      totalAmount: totalAmount,
      subTotal: subTotal,
      status: status,
      address: address,
      payment: payment,
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

export { createOrder };
