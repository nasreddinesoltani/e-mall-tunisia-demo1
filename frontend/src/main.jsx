import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import Products from "./Pages/Products.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import ProductsCategory from "./Pages/ProductsCategory.jsx";
import Details from "./Pages/Details.jsx";
import Shopping from "./Pages/Shopping.jsx";
import Cancel from "./Pages/Cancel.jsx";
import Success from "./Pages/Success.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/allproducts/:slug" element={<ProductsCategory />} />
      <Route path="/allproducts/" element={<Products />} />
      <Route path="/allproducts/Details" element={<Details />} />
      <Route path="/shopping" element={<Shopping />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/cancel" element={<Cancel />} />
      <Route path="/success" element={<Success />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
