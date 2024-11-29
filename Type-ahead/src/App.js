import './App.css';
import { useState, useEffect } from 'react';
import TypeAhead from './TypeAhead';
import TypeAheadCopy from './TypeAheadcopy';

const App = () => {
  const suggestions = ["Apple", "Banana", "Cherry", "Date", "Grapes", "Orange"];

  return (
    <div>
      <h1>TypeAhead Component</h1>
      <TypeAheadCopy suggestions={suggestions} />
    </div>
  );
};


function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

export default App;
