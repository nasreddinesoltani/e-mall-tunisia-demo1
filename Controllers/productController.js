import asyncHandler from "express-async-handler";
import Product from "../Models/productModel.js";

const createProduct = asyncHandler(async (req, res) => {
  const {
    name,
    photo,
    description,
    price,
    sizes,
    soldPrice,
    rating,
    quantity,
    color,
    category,
    subcategory,
    soldQty,
  } = req.body;
  try {
    const product = await Product.create({
      name: name,
      photo: photo,
      description: description,
      price: price,
      sizes: sizes,
      soldPrice: soldPrice,
      rating: rating,
      quantity: quantity,
      color: color,
      category: category,
      subcategory: subcategory,
      soldQty: soldQty,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

const getAllProducts = asyncHandler(async (req, res) => {
  try {
    // const products = await Product.find().populate("createdBy");
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    name,
    photo,
    description,
    price,
    sizes,
    soldPrice,
    rating,
    quantity,
    color,
    category,
    subcategory,
    soldQty,
  } = req.body;
  try {
    const product = await Product.findById(id);
    if (product) {
      product.name = name || product.name;
      product.photo = photo || product.photo;
      product.description = description || product.description;
      product.price = price || product.price;
      product.sizes = sizes || product.sizes;
      product.soldPrice = soldPrice || product.soldPrice;
      product.rating = rating || product.rating;
      product.quantity = quantity || product.quantity;

      product.color = color || product.color;
      product.category = category || product.category;
      product.subcategory = subcategory || product.subcategory;
      product.soldQty = soldQty || product.soldQty;

      const updatedProduct = await product.save();
      res.status(201).json(updatedProduct);
    } else {
      throw new Error("Product not found");
    }
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    res.status(201).json(product);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

export { createProduct, updateProduct, deleteProduct, getAllProducts };
