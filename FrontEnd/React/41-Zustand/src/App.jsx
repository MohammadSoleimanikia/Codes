import './App.css'
import useStore from './store/store'
function App() {

  const {count,increase,decrease} = useStore()
  return (
    <>
      <h1>this value is came from Zustand store</h1>
      <h2>{count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default App
