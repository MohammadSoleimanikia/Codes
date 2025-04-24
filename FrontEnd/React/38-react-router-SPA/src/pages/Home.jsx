
import { Link,useNavigate } from "react-router-dom"
export default function Home(){
    const navigate=useNavigate();
    function navigateHandler(){
        navigate('/products')
    }
    return <>
    <h1>My Home Page</h1>
    <Link to="/products">Go to product page</Link>
    <p>
        <button onClick={navigateHandler}>
            Navigate
        </button>
    </p>
    </>
}