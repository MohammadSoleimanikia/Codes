import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/examples.jsx';

function App() {
  
  return (
    <div>
      <Header />
      <main>
        <h2>Core concepts</h2>
        <CoreConcepts/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;