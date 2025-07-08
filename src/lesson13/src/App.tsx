
import { useState, useEffect, useCallback, useMemo, useRef, MouseEvent, KeyboardEvent} from 'react'
import './App.css'

interface User {
  id: number, 
  username: string
}

//An expensive calculation for the 'useMemo' example.
type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if(n < 2) return n
  return fib(n - 1 ) + fib(n - 2)
}

const myNum: number = 37

//End of expensive calculation example.

function App() {
  
const [count, setCount] = useState<number>(0)
const [users, setUsers] = useState<User[] | null>(null)

//useRef to use a ref inside the component.
const inputRef = useRef<HTMLInputElement>(null)
console.log(inputRef?.current)
console.log(inputRef?.current?.value)

useEffect(() => {
  console.log('mounting')
  console.log('Users:', users)

  return () => console.log('unmounting')
}, [users])

//Useful for functions we dont want to keep reloading on render.
const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev + 2), [])

/*
Used on functions that are 'expensive calculations' and slow down the app overall.
The first time it runs it will take time to calculate but as it is memoised the next
time the component rerenders it pulls the answer from useMemo
*/
const result = useMemo<number>(() => fib(myNum),[myNum])

/*

*/



  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input type="text" ref={inputRef}></input>
    </div>
  )
}

export default App
