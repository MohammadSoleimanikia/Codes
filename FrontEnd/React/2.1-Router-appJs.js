import './App.css';
import Header from './Components/Header';
import Counter from './Components/Counter';
import {Route,Routes,Link} from 'react-router-dom'
function App() {
  return (
    <>
    <Link to="/" >Home page</Link><br/>
    <Link to="/Counter" >Counter</Link>
  <Routes>
    <Route path="/" element={<Header/>}/>
    <Route path="/Counter" element={<Counter/>}/>
  </Routes>
  
  </>
  );
}
export default App;
