import Heading from './components/Heading'
import { Section } from './components/Section'
import Counter from './components/Counter'
function App() {
 

  return (
    <div>
      <Heading title={'Hello'}/>
      <Section title="Different Title"> This is my section.</Section>
      <Counter></Counter>
    </div>
  )
}

export default App
