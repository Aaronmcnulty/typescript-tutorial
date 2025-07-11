
import { ChangeEvent, ReactNode, useReducer} from 'react'

// Using 'useReducer' as an alternative to 'useState'.

//Initial state of count is 0
const initState = { count: 0, text: '', trueOption: true}


const enum REDUCER_ACTION_TYPE {
    INCREMENT, 
    DECREMENT,
    NEW_INPUT,
    BOOLEAN_OPTION,
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE, 
    payload?: string, 

}

// reducer function using the above enum and ReducerAction.
const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
    switch (action.type) {
        //Switches return different function depending on enum option.
        case REDUCER_ACTION_TYPE.INCREMENT: 
            return {...state, count: state.count + 1}
        case REDUCER_ACTION_TYPE.DECREMENT: 
            return {...state, count: state.count - 1}
        case REDUCER_ACTION_TYPE.NEW_INPUT: 
            return {...state, text: action.payload ?? ''}
        case REDUCER_ACTION_TYPE.BOOLEAN_OPTION:
            return{...state, trueOption: !state.trueOption}
        default: 
            throw new Error()
    }
}


type ChildrenType = {
    children: (num: number) => ReactNode
}


const Counter = ({ children }: ChildrenType) => {

    //Import useReducer function above as well as the initial state.
    const [state, dispatch] = useReducer(reducer, initState)

    //onClick functions for '+' and '-' buttons. 
    const increment = () => dispatch({type: REDUCER_ACTION_TYPE.INCREMENT})
    const decrement = () => dispatch({type: REDUCER_ACTION_TYPE.DECREMENT})
    const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => dispatch({type: REDUCER_ACTION_TYPE.NEW_INPUT, 
        payload: e.target.value
    })
     const handleBooleanChange = () => dispatch({type: REDUCER_ACTION_TYPE.BOOLEAN_OPTION})



    return(
        <>
            <h1>{children(state.count)}</h1>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
            <input type="text" onChange={handleTextInput}></input>
            <h2>{state.text}</h2>
            <button onClick={handleBooleanChange}>swap</button>
            <h3>{state.trueOption ? 'true' : 'false'}</h3>

        </> 
    )
} 

export default Counter;