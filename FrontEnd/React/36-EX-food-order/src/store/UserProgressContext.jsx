import { createContext, useState } from "react";
const userProgressContext = createContext({
    progress: "", //cart , checkout
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},
});
export function UserProgressContextProvider({ children }) {
    const [userProgress, setUserProgress] = useState("");
    function showCart() {
        setUserProgress("cart");
    }
    function hideCart() {
        setUserProgress("");
    }
    function showCheckout() {
        setUserProgress("checkout");
    }
    function hideCheckout() {
        setUserProgress("");
    }
    const userProgressCTX = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
    };
    return (
        <userProgressContext.Provider value={userProgressCTX}>
            {children}
        </userProgressContext.Provider>
    );
}
export default userProgressContext;
