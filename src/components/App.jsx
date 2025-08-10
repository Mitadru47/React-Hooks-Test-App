import { useEffect, useState } from "react";
import { Counter } from "./Counter";

function handleIncrement(event, count, setCount) {

  event.preventDefault();
  console.log("Before Updating State\nParent Count: " + count);

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

  console.log("After Updating State\nParent Count: " + JSON.stringify(count));
}

function App() {

  const [ parentCount, setParentCount ] = useState({ name: "Parent State Count Object", counter: 0 });
  
  useEffect(() => console.log("PARENT COMPONENT FIRST RENDER!"), []);
  useEffect(() => console.log("PARENT COMPONENT RE-RENDERED!\nParent Count: " + JSON.stringify(parentCount)), [parentCount]);

  return (

    <div>

      <h2>Component - App</h2>
      <p>Welcome to the <strong>App</strong> component. Bit lacklustre ain't it?</p>

      <p>{"Parent Count: " + JSON.stringify(parentCount)} <br></br><br></br> <button onClick={(event) => handleIncrement(event, parentCount, setParentCount)}>Increment</button></p>
      <hr></hr>

      <Counter />

    </div>
  );
}

export default App;