import Logo from "../assets/logo.jpg";
import Button from "../UI/Button"
export default function Header() {
  return (
    <div id="main-header">
      <div id="title">
        <img src={Logo} alt="the logo of the App" />
        <h1>REACTFOOD</h1>
      </div>
      <Button textOnly={true }>Cart(0)</Button>
    </div>
  );
}
