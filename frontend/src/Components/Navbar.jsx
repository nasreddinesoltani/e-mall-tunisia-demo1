/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Collapse, Modal, Ripple, initTWE } from "tw-elements";
import { SiShopify } from "react-icons/si";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/userSlice";
import { clearCredentials } from "../Redux/authSlice";

const Navbar = () => {
  initTWE({ Collapse, Modal, Ripple });

  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((state) => state.cart.items);
  const { allProducts } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout(navigate));
    dispatch(clearCredentials());
  };
  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  return (
    // <!-- Main navigation container -->
    <nav
      className="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-gray-900 lg:py-4"
      data-twe-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div>
          <a className="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0">
            <SiShopify className="text-yellow-400 size-8 mr-2" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <NavLink className="nav-link" to="/">
                <span className="text-yellow-400">E-Mall</span> Tunisia
              </NavLink>
            </span>
          </a>
        </div>

        {/* <!-- Hamburger button for mobile view --> */}
        <button
          className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          data-twe-collapse-init
          data-twe-target="#navbarSupportedContent4"
          aria-controls="navbarSupportedContent4"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <!-- Hamburger icon --> */}
          <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        {/* <!-- Collapsible navbar container --> */}
        <div
          className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
          id="navbarSupportedContent4"
          data-twe-collapse-item
        >
          {/* <!-- Left links --> */}
          <ul
            className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row ml-96"
            data-twe-navbar-nav-ref
          >
            {/* <!-- Home link --> */}
            <li
              className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
              data-twe-nav-item-ref
            >
              <a
                className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                aria-current="page"
                data-twe-nav-link-ref
              >
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </a>
            </li>
            <li
              className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
              data-twe-nav-item-ref
            >
              <a
                className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                aria-current="page"
                data-twe-nav-link-ref
              >
                <NavLink className="nav-link" to="/allproducts/">
                  Store
                </NavLink>
              </a>
            </li>
            <li
              className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
              data-twe-nav-item-ref
            >
              <a
                className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                aria-current="page"
                data-twe-nav-link-ref
              >
                <NavLink
                  className="nav-link"
                  state={{ from: "Men" }}
                  to="/allproducts/men"
                >
                  Men
                </NavLink>
              </a>
            </li>
            <li
              className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
              data-twe-nav-item-ref
            >
              <a
                className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                aria-current="page"
                data-twe-nav-link-ref
              >
                <NavLink
                  className="nav-link"
                  state={{ from: "Women" }}
                  to="/allproducts/women"
                >
                  Women
                </NavLink>
              </a>
            </li>
            <li
              className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
              data-twe-nav-item-ref
            >
              <a
                className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                aria-current="page"
                data-twe-nav-link-ref
              >
                <NavLink
                  className="nav-link"
                  state={{ from: "Kids" }}
                  to="/allproducts/kids"
                >
                  Kids
                </NavLink>
              </a>
            </li>
          </ul>
          {/* <div
            className="w-9 h-9 bg-gray-100 rounded-full
        flex justify-center items-center relative"
            onClick={handleOpenTabCart}
          >
            <img src={iconCart} alt="" className="w-5" />
            <span
              className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm
            w-5 h-5 rounded-full flex justify-center items-center"
            >
              {totalQuantity}
            </span>
          </div> */}
          <div className="flex items-center">
            {/* <!-- Cart Icon --> */}
            <a className="ps-2 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80">
              <NavLink to="/shopping">
                <span className="[&>svg]:w-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                  </svg>
                </span>
                <span className="absolute -mt-8 ms-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.7rem] font-bold leading-none text-white">
                  {totalQuantity}
                </span>
              </NavLink>
            </a>
            {userInfo ? (
              <div>
                <button
                  onClick={logoutHandler}
                  type="button"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  className="me-3 inline-block rounded px-2 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
                >
                  <NavLink className="nav-link" to="/signin">
                    Logout
                  </NavLink>
                </button>
              </div>
            ) : (
              <div>
                <button
                  type="button"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  className="me-3 inline-block rounded px-2 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
                >
                  <NavLink className="nav-link" to="/signin">
                    Login
                  </NavLink>
                </button>
                <button
                  type="button"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  className="me-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                >
                  <NavLink className="nav-link" to="/signup">
                    Sign up
                  </NavLink>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
