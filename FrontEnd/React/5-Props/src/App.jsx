import reactImg from './assets/react-core-concepts.png'
// insert data from another file (named export)
import { CORE_CONCEPTS } from './data';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
const description=reactDescriptions[genRandomInt(2)];
function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function CoreConcept({img,title,description}){
  return (
    <li>
      <img src={img} alt="..." />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Core concepts</h2>
        <section id='core-concepts'>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;