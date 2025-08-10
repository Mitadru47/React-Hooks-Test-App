import { useEffect, useState } from "react";

function handleIncrement(event, count, setCount) {

  event.preventDefault();

  console.log("Before Updating State\nCount: " + count);
  setCount(count + 1);

  console.log("After Updating State\nCount: " + count);
}

export function Counter() {

  const [ count, setCount ] = useState(0);

  useEffect(() => console.log("CHILD COMPONENT FIRST RENDER!"), []);
  useEffect(() => console.log("CHILD COMPONENT RE-RENDERED!\nCount: " + count), [count]);

  return(

    <>
      <p>{"Count: " + count} <br></br><br></br> <button onClick={(event) => handleIncrement(event, count, setCount)}>Increment</button></p>

    </>
  );
}; 