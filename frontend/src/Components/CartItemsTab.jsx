import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { changeQuantity } from "../Redux/cartSlice";

const CartItemsTab = ({ el }) => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.items);
  const [item, setItem] = useState(el);
  const { allProducts } = useSelector((state) => state.product);
  const [product, setProduct] = useState(
    allProducts?.filter((product) => product._id == item.productId)
  );

  const handleMinusQuantity = () => {};
  const handlePlusQuantity = () => {};
  return (
    <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
      <img src={product.photo} alt="" className="w-12" />
      <h3>{product.name}</h3>
      <p>${product.price * item.quantity}</p>
      <div className="w-20 flex justify-between gap-2">
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          onClick={handleMinusQuantity}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          onClick={handlePlusQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItemsTab;
