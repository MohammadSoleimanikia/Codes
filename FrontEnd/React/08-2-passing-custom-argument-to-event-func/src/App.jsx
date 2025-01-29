// insert data from another file (named export)
import { CORE_CONCEPTS } from './data';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  function handleSelect(selectedButton){
    // selectedButton => 'components' ,'jsx' , 'props' , 'state'
    console.log(selectedButton);
  }
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
        <section id="examples">
          <h2>examples</h2>
          <menu>
            <TabButton onSelect={()=>{handleSelect('components')}}>Components</TabButton>
            <TabButton onSelect={()=>{handleSelect('JSX')}}>JSX</TabButton>
            <TabButton onSelect={()=>{handleSelect('Props')}}>Props</TabButton>
            <TabButton onSelect={()=>{handleSelect('State')}}>State</TabButton>
          </menu>
          dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;