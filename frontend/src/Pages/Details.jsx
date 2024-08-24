/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import "flowbite";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, minusQuantity, removeFromCart } from "../Redux/cartSlice";
import { getAllProducts } from "../Redux/productSlice";
import { useLocation, useNavigate } from "react-router-dom";

// import { NavLink } from "react-router-dom";
// import { useParams } from "react-router-dom";

const Details = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const carts = useSelector((state) => state.cart.items);
  const { allProducts } = useSelector((state) => state.product);
  const product = allProducts?.find(
    (product) => product?._id === location.state.from
  );
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  // const [item, setItem] = useState({
  //   productId: product._id,
  //   quantity: 0,
  //   price: product.price,
  //   name: product.name,
  //   photo: product.photo,
  // });

  const item = carts?.find((item) => item.productId === location.state.from);
  let isOnCart = false;
  let quantityBlock = "hidden";
  let quantity = 0;
  if (typeof item !== "undefined") {
    isOnCart = true;
    quantityBlock = "";
    quantity = item.quantity;
  }
  console.log(isOnCart);

  const rate = product?.rating;
  const [rating, setRating] = useState(rate);

  const minusQuantityHandler = (item) => {
    // e.preventDefault();
    dispatch(minusQuantity(item));
  };
  const plusQuantityHandler = (item) => {
    // e.preventDefault();
    dispatch(addToCart(item));
  };
  const removeFromCartHandler = (item) => {
    dispatch(removeFromCart(item));
    navigate("/shopping");
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: product._id,
        quantity: 1,
        price: product.price,
        name: product.name,
        photo: product.photo,
      })
    );
  };

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img
              className="w-full hidden dark:block"
              src={product?.photo}
              alt=""
            />
          </div>
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {product?.name}
            </h1>
            <div className="mt-8 mb-8 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                ${product?.price}
              </p>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <div className="flex items-center gap-1">
                  <Rating
                    precision={0.5}
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                  />
                </div>
                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                  ({rating})
                </p>
                <a
                  href="#"
                  className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                >
                  345 Reviews
                </a>
              </div>
            </div>
            <div className={quantityBlock}>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  id="decrement-button-5"
                  onClick={() => minusQuantityHandler(item)}
                  data-input-counter-decrement="counter-input-5"
                  className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                >
                  <svg
                    className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 1h16"
                    />
                  </svg>
                </button>

                {/* <input
                id="quantity"
                type="number"
                name="quantity"
                value={item.quantity}
                min={1}
              /> */}
                <span className=" h-7 w-7 text-white text-xl">{quantity}</span>
                <button
                  type="button"
                  id="increment-button-5"
                  onClick={() => plusQuantityHandler(item)}
                  data-input-counter-increment="counter-input-5"
                  className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                >
                  <svg
                    className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => removeFromCartHandler(item)}
                  className="inline-flex items-center rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4  focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  <svg
                    className="me-1.5 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
                  Remove
                </button>
              </div>
            </div>
            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <button
                type="button"
                className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5 -ms-2 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                  />
                </svg>
                Add to favorites
              </button>
              <button
                type="button"
                onClick={handleAddToCart}
                className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <svg
                  className="-ms-2 me-2 h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                  />
                </svg>
                Add to cart
              </button>
            </div>
            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
            <p className="mb-6 text-gray-500 dark:text-gray-400">
              Studio quality three mic array for crystal clear calls and voice
              recordings. Six-speaker sound system for a remarkably robust and
              high-quality audio experience. Up to 256GB of ultrafast SSD
              storage.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
              Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
              Magic Keyboard or Magic Keyboard with Touch ID.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
