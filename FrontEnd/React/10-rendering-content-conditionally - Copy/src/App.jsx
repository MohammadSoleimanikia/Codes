import { useState } from 'react';
// insert data from another file (named export)
import { CORE_CONCEPTS } from './data';
import { EXAMPLES } from './data';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  const [selectedTopic,setSelectedTopic] =useState();
  function handleSelect(selectedButton){
    // selectedButton => 'components' ,'jsx' , 'props' , 'state'
    setSelectedTopic(selectedButton);
  }
  // default value
  let tabContent=<p> please select a button </p>
  // change if value changed 
  if(selectedTopic){
    tabContent=(
      <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
      </div>
    )
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
            <TabButton onSelect={()=>{handleSelect('jsx')}}>JSX</TabButton>
            <TabButton onSelect={()=>{handleSelect('props')}}>Props</TabButton>
            <TabButton onSelect={()=>{handleSelect('state')}}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;