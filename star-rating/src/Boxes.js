import { useState } from "react";
import './Boxes.css';
function Boxes() {
  let [upToIndex, setUpToIndex] = useState(-1);
  const arr = Array.from({length:5},(_,i) => i);
  const boxStyle = {
    width: '100px',
    height: '100px',
    border: '1px solid black',
  };

  function handleBoxClick(index) {
    console.log(index);
    setUpToIndex(index + 1);
    console.log(upToIndex, '--- up');
  }

  return (
    <>
      <div className="flex-container">
        {arr.map((_, index) => {
          return index < upToIndex ?
            <div style={{...boxStyle,backgroundColor: 'red'}} onClick={() => handleBoxClick(index)} key={index}></div> :
            <div onClick={() => handleBoxClick(index)} key={index} style={boxStyle}></div>
        }
        )}
      </div>


    </>
  )
}
export default Boxes;