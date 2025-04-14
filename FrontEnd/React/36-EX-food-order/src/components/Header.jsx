import Logo from "../assets/logo.jpg";
import Button from "../UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import userProgressContext from "../store/userProgressContext";
import Cart from "./Cart";
export default function Header() {
    const cartCTX = useContext(CartContext);

    const totalQuantity = cartCTX.items.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    const userProgressCTX = useContext(userProgressContext);

    function handleShowCart() {
          userProgressCTX.showCart();
    }

    return (
        <div id="main-header">
            <div id="title">
                <img src={Logo} alt="the logo of the App" />
                <h1>REACTFOOD</h1>
            </div>
            <Button onClick={handleShowCart} textOnly={true}>
                Cart {totalQuantity}
            </Button>
            <Cart />
        </div>
    );
}
