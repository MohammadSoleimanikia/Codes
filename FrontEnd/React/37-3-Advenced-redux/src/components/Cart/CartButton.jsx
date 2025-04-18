import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { showCartAction } from 
const CartButton = (props) => {
  const dispatch=useDispatch();
  function handleShowCart(){
    dispatch(showCartAction.showCart())
  }
  return (
    <button onClick={handleShowCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
