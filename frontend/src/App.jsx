import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import CartTab from "./Components/CartTab.jsx";

const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
      <CartTab></CartTab>
    </>
  );
};

export default App;
