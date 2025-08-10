import { useEffect, useState } from "react";

function handleIncrement(event, count, setCount) {

  event.preventDefault();
  console.log("Before Updating State\nCount: " + count);
  
  // Note: When a value is passed to the setState function, React will REPLACE the current state with the new (+1) value twice
  // Hence, the value will be incremented only once

  // setCount({ ...count, counter: count.counter + 1 });
  // setCount({ ...count, counter: count.counter + 1 });

  // Note: When a callback is passed to the setState function, React will ensure the latest state is passed as argument each time
  // Hence, the value will be incremented twice

  setCount((prevCount) => ({ ...count, counter: prevCount.counter + 1 }));
  setCount((prevCount) => ({ ...count, counter: prevCount.counter + 1 }));

  // Note: There are two setState calls in the above example but the component re-renders only once
  // Wherever possible, React batches the state updates

  console.log("After Updating State\nCount: " + JSON.stringify(count));
}

export function Counter() {

  const [ count, setCount ] = useState({ name: "Child State Count Object", counter: 0 });
  const [ inputElementState, setInputElementState ] = useState("");

  useEffect(() => console.log("CHILD COMPONENT FIRST RENDER!"), []);
  useEffect(() => console.log("CHILD COMPONENT RE-RENDERED!\nCount: " + JSON.stringify(count)), [count]);

  return(

    <>
      <p>{"Count: " + JSON.stringify(count)} <br></br><br></br> <button onClick={(event) => handleIncrement(event, count, setCount)}>Increment</button></p>

      <hr></hr>
      
      <p>{inputElementState ? ("State of Input Element: " + inputElementState) : "Input Element is currently empty!"}</p>
      <input value={inputElementState} onChange={(event) => setInputElementState(event.target.value)}></input>

    </>
  );
}; 