import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";
// pass an array of Route definition objects and every object represents one route
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            { path: "/", element: <Home /> },
            { element: <Products />, index: true },
            { path: "products/:productId", element: <ProductDetail /> },
        ],
    },
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
