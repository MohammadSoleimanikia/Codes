import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import Home from "./pages/Home";
import {createBrowserRouter ,RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Tour from "./pages/Tour";

function App() {
  const router=createBrowserRouter([
    {path:'/',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'/:id',element:<Tour/>}
    ]}
  ])
    return <RouterProvider router={router}/>
}

export default App;
