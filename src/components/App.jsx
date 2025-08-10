import { useEffect, useState } from "react";
import { Counter } from "./Counter";

function handleIncrement(event, count, setCount) {

  event.preventDefault();
  console.log("Before Updating State\nParent Count: " + count);

  // SAFE: Primitives are already immutable
  // setCount(count + 1);  

  // NOT SAFE: Reference-type values like objects are mutable
  // NOTE: React won't recognize change in state since, reference remains the same

  // count.counter = count.counter + 1;
  // setCount(count);

  // NOTE: Creating a new reference-type value will solve the above issue 

  const newCount = { ...count, counter: count.counter + 1 };
  setCount(newCount);

  console.log("After Updating State\nParent Count: " + count);
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