# react routing

## installation

install package

```bash
npm install react-router-dom
```

## define the routes we wanna support

```js
// 🛣 Import necessary functions from React Router for browser-based routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// 🏠 Import the page component to render when user visits '/'
import Home from "./pages/home";

// 🧭 Create a router using `createBrowserRouter`
// This router will define how different URLs map to different components
// Each object in the array is one "route definition"
const router = createBrowserRouter([
    {
        // ✅ Define which path this route is responsible for (like: www.example.com/)
        path: "/",

        // 🧱 Define which React element (component) should render when that path is matched
        element: <Home />,
    },
]);

function App() {
    // 🚀 Use `RouterProvider` to give our app access to routing
    // It tells React to use the router we just created to handle navigation
    return <RouterProvider router={router} />;
}

export default App;
```

## another approach for defining routes (old way)

```js
import {createRouteFromElements, route} from 'react-router-dom'
const routeDefinitions= createRoutesFromElements(
    <Route>
        <Route path="/" element={<Home/>}>
        <Route path="/products" element={<Products/>}>
    </Route>
)
const router = createBrowserRouter(routeDefinitions)
```

## navigate between pages via link

```js
<a href="/products">Go to product page</a>
```

after we click on this link react reload the page than can cause the lose of any context or application wide state this issues are against the SPA rules
we should use this link the way that change the URL and `prevent the default sending request`

### using link component from react router DOM:

```js
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <>
            <h1>My Home Page</h1>
            <Link to="/products">Go to product page</Link>
        </>
    );
}
```

## layout and nested routes

ex: when we add navigation header we have to add this component to every pages and when application grows bigger this could be annoying so we solve this repetition by using a layout.

### adding layout

1. add layout component (navigation)

```jsx
// import Outlet for inserting pages inside of the layout
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
function RootLayout() {
    return (
        <>
            <MainNavigation />
            // with Outlet we define where the child element should be rendered.
            <Outlet />
        </>
    );
}
export default RootLayout;
```

1. add root route to route definitions

```jsx
const router = createBrowserRouter([
    // use the path of slash nothing
    {
        path: "/",
        element: <RootLayout />,
        //add children prop and add the path that we want to wrapped by this layout(navigation)
        children: [
            { path: "/", element: <Home /> },
            { path: "/products", element: <Products /> },
        ],
    },
]);
```

now this route acts as a parent route to the child routes

for complex pages we could have multiple root routes. for ex:

```jsx
{
    path:'/admin',
    element:<Example/>,
    children:[]
}
```

## Showing Error Pages with errorElement

if we try to go to an undefined route we get default 404 page we can change this page

1. add a new page called `Error`

```jsx
export default function Error() {
    return <h1>An error occurred</h1>;
}
```

2. add error page tp `errorElement` property to root ('/')page.

```jsx
import Error from "./pages/Error";
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        // all errors bubble up to this route
        errorElement: <Error />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/products", element: <Products /> },
        ],
    },
]);
```

-   for styling purpose we use `a` tag selector because the Link component produce an anchor tag

## add CSS effect on active (selected) route on navigation

1. use NavLink instead of Ling that have a special className prop
2. this className takes a function and this function returns a class name
3. this function receive an object that we can de-structure the isActive property that provided by react-router-dom

```jsx
import { NavLink } from "react-router-dom";
<NavLink
    // "end" ensures this link is only active on exact "/" path
    // without it, "/" would also match routes like "/products"
    className={({ isActive }) => (isActive ? classes.active : "")}
    to="/"
    end
>
    Home
</NavLink>;
```

## trigger navigating programmatically

we can do this with useNavigate from react-router-dom

```jsx
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
function navigateHandler() {
    navigate("/products");
}
<button onClick={navigateHandler}>Navigate</button>;
```

## defining and using dynamic routes.
ex: we want for each products a route products/item1 products/item2

1. using dynamic path segments or path parameters with colon(:)
```jsx
// this tell react that the productId part is dynamic 
{path:'/products/:productId',element:<ProductDetail/>}
```
2. tell the element which productId this page was loaded with `useParams` inside of the `productDetail`
```jsx
import { useParams } from "react-router-dom"
export default function ProductDetail(){
    const params=useParams();
    return <h1>Product {params.productId}</h1>
}
```

## adding Links for Dynamic Routes
```jsx
<Link to={`/products/${dynamicPart}`}>Link text</Link>
```

## relative vs absolute Paths:

In React Router, relative paths are added to the current parent route, while absolute paths (starting with a /) begin from the root of the app.
```jsx
// root is /
{path:'/',
  element:<RootLayout/>,
  errorElement:<Error/>,
  children:[
    {path: '/',element: <Home/>},
    // absolute path starts with /
    {path:'/products',element:<Products/>},
    // relative path it append to the currently active route
    {path:'products/:productId',element:<ProductDetail/>}
  ]
  },
```

## index Route
An index route is the default route for a nested route. 
for example in bellow we set the products page to the default page .
**important** the path attribute should removed.
```jsx
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            { path: "/", element: <Home /> },
            // default route for / 
            { element: <Products />, index: true },
            { path: "products/:productId", element: <ProductDetail /> },
        ],
    },
]);
```