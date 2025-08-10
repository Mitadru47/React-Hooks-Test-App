import { useEffect, useState } from "react";

function handleIncrement(event, count, setCount) {

  event.preventDefault();
  console.log("Before Updating State\nCount: " + count);
  
  // SAFE: Primitives are already immutable
  // setCount(count + 1);  

  // NOT SAFE: Reference-type values like objects are mutable
  // NOTE: React won't recognize change in state since, reference remains the same

  // count.counter = count.counter + 1;
  // setCount(count);

  // NOTE: Creating a new reference-type value will solve the above issue 

  const newCount = { ...count, counter: count.counter + 1 };
  setCount(newCount);

  console.log("After Updating State\nCount: " + count);
}

export function Counter() {

  const [ count, setCount ] = useState({ name: "Child State Count Object", counter: 0 });

  useEffect(() => console.log("CHILD COMPONENT FIRST RENDER!"), []);
  useEffect(() => console.log("CHILD COMPONENT RE-RENDERED!\nCount: " + JSON.stringify(count)), [count]);

  return(

    <>
      <p>{"Count: " + JSON.stringify(count)} <br></br><br></br> <button onClick={(event) => handleIncrement(event, count, setCount)}>Increment</button></p>

    </>
  );
}; 