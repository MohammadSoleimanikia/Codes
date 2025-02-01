import { Fragment } from "react";
function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </Fragment>
  );
}

export default App;
