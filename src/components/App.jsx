import { useEffect, useState } from "react";
import { Counter } from "./Counter";

function handleIncrement(event, count, setCount) {

  event.preventDefault();

  console.log("Before Updating State\nParent Count: " + count);
  setCount(count + 1);

  console.log("After Updating State\nParent Count: " + count);
}

function App() {

  const [ parentCount, setParentCount ] = useState(0);
  
  useEffect(() => console.log("PARENT COMPONENT FIRST RENDER!"), []);
  useEffect(() => console.log("PARENT COMPONENT RE-RENDERED!\nParent Count: " + parentCount), [parentCount]);

  return (

    <div>

      <h2>Component - App</h2>
      <p>Welcome to the <strong>App</strong> component. Bit lacklustre ain't it?</p>

      <p>{"Parent Count: " + parentCount} <br></br><br></br> <button onClick={(event) => handleIncrement(event, parentCount, setParentCount)}>Increment</button></p>
      <hr></hr>

      <Counter />

    </div>
  );
}

export default App;