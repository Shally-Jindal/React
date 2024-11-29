import {useState} from 'react';

function Counter(){
    let [count, setCount] = useState(0);
    function handleIncrement(){
        setCount(prevCount => prevCount + 1);
    }

    function handleDecrement(){
        setCount(prevCount => prevCount - 1);
    }
    return (
        <>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <div>{count}</div>
        </>
    )

}
export default Counter;