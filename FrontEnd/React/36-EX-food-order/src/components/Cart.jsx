import Modal from "../UI/Modal";
import CartContext from "../store/CartContext";
import userProgressContext from "../store/userProgressContext";
import { useContext } from "react";
import { currencyFormatter } from "../util/formatter";
import Button from "../UI/Button";
import CartItem from "./cartItem";
export default function Cart() {
    const cartCTX = useContext(CartContext);

    const userProgressCTX = useContext(userProgressContext);

    const cartTotal = cartCTX.items.reduce(
        (total, item) => total + item.quantity * item.price,
        0
    );

    function handleCloseCart() {
        userProgressCTX.hideCart();
    }

    function handleGoToCheckout() {
        userProgressCTX.showCheckout();
    }
    return (
        <Modal
            open={userProgressCTX.progress === "cart"}
            onClose={userProgressCTX.progress === "cart"? handleCloseCart : null}
            className="cart"
        >
            <h2>Your Cart</h2>
            <ul>
                {cartCTX.items.map((item) => {
                    return (
                        <CartItem
                            key={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            price={item.price}
                            onDecrease={() => cartCTX.removeItem(item.id)}
                            onIncrease={() => cartCTX.addItem(item)}
                        />
                    );
                })}
            </ul>
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseCart}>
                    Close
                </Button>
                {cartCTX.items.length > 0 && (
                    <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
                )}
            </p>
        </Modal>
    );
}
