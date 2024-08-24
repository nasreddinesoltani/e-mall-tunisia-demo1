import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    subTotal: { type: Number },
    totalAmount: { type: Number },
    status: { type: String, default: "Product loading" },
    address: { type: String, required: true },
    payment: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
