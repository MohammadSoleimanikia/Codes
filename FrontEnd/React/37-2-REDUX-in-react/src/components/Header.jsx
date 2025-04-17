import classes from './Header.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { authActions } from '../store/auth'; 
const Header = () => {
  const dispatch=useDispatch();
  const isAuthenticated=useSelector(state=>state.authentication.isAuthenticated)

  function handleLogout(){
    dispatch(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            {isAuthenticated &&<button onClick={handleLogout}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
