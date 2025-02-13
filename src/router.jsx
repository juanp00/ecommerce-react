import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/products",
        element: <Products />,
    },
    {
        path: "/carrinho",
        element: <Cart />,
    }
])

export default router