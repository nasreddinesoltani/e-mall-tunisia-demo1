import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    photo: [
      {
        type: String,
        default:
          "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png",
      },
    ],
    description: { type: String },
    price: { type: Number, required: true },
    sizes: [{ type: String }],
    soldPrice: { type: Number },
    rating: { type: Number, default: 0 },
    quantity: { type: Number },
    color: [{ type: String }],
    category: { type: String },
    subcategory: { type: String },
    soldQty: { type: Number },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
