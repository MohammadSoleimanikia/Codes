import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/userProgressContext";
function App() {
  return (
    <CartContextProvider>
      <UserProgressContextProvider>
      <Header/>
      <Meals/>
      <Cart/>
      <Checkout/>
      </UserProgressContextProvider>
    </CartContextProvider>
  );
}

export default App;
