import Counter from './Counter'
import './App.css'

function App() {
  

  return (
    <>
      <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
    </>
  )
}

export default App

