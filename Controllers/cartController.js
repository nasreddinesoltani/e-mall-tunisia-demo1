import asyncHandler from "express-async-handler";
import Cart from "../Models/cartModel.js";

const createCart = asyncHandler(async (req, res) => {
  const { products, totalPrice } = req.body;
  try {
    const cart = await Cart.create({
      products: products,
      createdBy: req.user._id,
      totalPrice: totalPrice,
    });

    res.status(201).json(cart);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

const getCart = asyncHandler(async (req, res) => {
  const { createdBy } = req.params;
  try {
    const cart = await Cart.findOne({ createdBy: createdBy }).populate(
      "products.productId"
    );
    res.status(200).json(cart);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

const getAllCarts = asyncHandler(async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

const deleteCart = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findByIdAndDelete(id);
    res.status(201).json(cart);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

export { createCart, getCart, getAllCarts, deleteCart };

// , updateCart, deleteCart
