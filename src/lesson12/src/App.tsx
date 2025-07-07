import Heading from './components/Heading'
import { Section } from './components/Section'
import Counter from './components/Counter'
import List from './components/List'


function App() {
 

  return (
    <div>
      <Heading title={'Hello'}/>
      <Section title="Different Title"> This is my section.</Section>
      <Counter></Counter>
      <List items={["Coffee",  "Tacos", "Code"]} render={(item: string) => <span className="gold">{item}</span> }/>
    </div>
  )
}

export default App
