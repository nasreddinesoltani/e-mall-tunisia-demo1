import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleStatusTab } from "../Redux/cartSlice";
import CartItemsTab from "./CartItemsTab";

const CartTab = () => {
  const carts = useSelector((state) => state.cart.items);
  const statusTab = useSelector((state) => state.cart.statusTab);
  const dispatch = useDispatch();
  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };
  return (
    <div
      className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] 
      transform transition-transform duration-500
      ${statusTab === false ? "translate-x-full" : ""}
      `}
    >
      <h2 className="p-5 text-white text-2xl">Shopping Cart</h2>
      <div className="p-5"></div>
      <div className="grid grid-cols-2">
        <button className="bg-black text-white" onClick={handleCloseTabCart}>
          CLOSE
        </button>
        <button className="bg-amber-600 text-white">CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartTab;
