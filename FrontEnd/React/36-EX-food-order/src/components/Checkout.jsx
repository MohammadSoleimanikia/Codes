import Modal from "../UI/Modal";
import CartContext from "../store/CartContext";
import { useContext } from "react";
import { useActionState } from "react";
import useHttp from "../hooks/useHttp";

import { currencyFormatter } from "../util/formatter";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Error from "./Error";
import userProgressContext from "../store/userProgressContext";

// Define request config outside the component to prevent re-creation on every render
const requestConfig = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
};

export default function Checkout() {
    const cartCTX = useContext(CartContext);
    const userProgressCTX = useContext(userProgressContext);

    // Custom HTTP hook returns request status and response data
    const {
        data,
        error,
        sendRequest,
        clearData
    } = useHttp("http://localhost:3000/orders", requestConfig);

    // Handle closing the modal and resetting UI state
    function handleClose() {
        userProgressCTX.hideCheckout();
    }

    // Reset UI and cart state after successful submission
    function handleFinish() {
        userProgressCTX.hideCheckout();
        cartCTX.clearCart();
        clearData();
    }

    // Form submission logic using React's useActionState to handle form actions cleanly
    async function checkoutAction(prevState, fd) {
        const customerData = Object.fromEntries(fd.entries());
        await sendRequest(
            JSON.stringify({
                order: {
                    items: cartCTX.items,
                    customer: customerData,
                },
            })
        );
    }

    // useActionState is used to bind form action logic and track submission status
    const [formState, formAction, isSending] = useActionState(checkoutAction, null);

    // Calculate cart total dynamically from cart context
    const cartTotal = cartCTX.items.reduce(
        (total, item) => total + item.quantity * item.price,
        0
    );

    // Handle UI feedback while form is submitting
    let actions = (
        <>
            <Button onClick={handleClose} type="button" textOnly>
                Close
            </Button>
            <Button>Submit Order</Button>
        </>
    );

    if (isSending) {
        actions = <span>Sending order data ...</span>;
    }

    // Render success message if request was successful and no error
    if (data && !error) {
        return (
            <Modal open={userProgressCTX.progress === 'checkout'} onClose={handleClose}>
                <h1>Success!</h1>
                <p>Your order was submitted successfully</p>
                <p>We will get back to you with more details via email within the next few minutes.</p>
                <p className="modal-actions">
                    <Button onClick={handleFinish}>Okay</Button>
                </p>
            </Modal>
        );
    }

    // Main checkout form with total amount and user details inputs
    return (
        <Modal
            onClose={handleClose}
            open={userProgressCTX.progress === "checkout"}
        >
            {/* action is handled by useActionState */}
            <form action={formAction}>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

                {/* User Input Fields */}
                <Input label="Full Name" id="name" type="text" />
                <Input label="Email" id="email" type="email" />
                <Input label="Street" id="street" type="text" />

                <p className="control-row">
                    <Input label="Postal Code" id="postal-code" type="text" />
                    <Input label="City" id="city" type="text" />
                </p>

                {/* Show error component if submission failed */}
                {error && <Error title="Failed to submit order" message={error} />}

                {/* Show action buttons or loading message */}
                <p className="modal-actions">{actions}</p>
            </form>
        </Modal>
    );
}
