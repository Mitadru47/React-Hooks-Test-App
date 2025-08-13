import { useState } from "react";

export function Clock() {

  const [ secondsCounter, setSecondsCounter ] = useState(0);
  console.log("CLOCK COMPONENT RE-RENDERED!\nSecond Counter: " + secondsCounter);

  // The setInterval() method calls a function at specified intervals (in milliseconds)
  setInterval(() => {

    console.log("SET INTERVAL RESOLVED!\nSecond Counter: " + secondsCounter);
    setSecondsCounter(secondsCounter + 1);

  }, 10000);  // 10s for better logging/understanding

  return(

    <>
    
      <hr></hr>
      <p>{secondsCounter} seconds have elapsed!</p>
    
    </>
  );
}

// VISUAL INTERPRETATION OF RENDERING PIPELINE //

// Component Render
// setInterval 1 Triggered
// .
// .
// .

// setInterval 1 Resolved
// Component Re-Render

// setInterval 1 Re-Triggered   - Standard setInterval Logic - Repeatedly calls a function or executes a code snippet, with a fixed time delay between each call
// setInterval 2 Triggered      - Every component re-render triggers a NEW setInterval
// .
// .
// .

// setInterval 1 Resolved
// Component Re-Render

// setInterval 1 Re-Triggered   - Standard setInterval Logic - Repeatedly calls a function or executes a code snippet, with a fixed time delay between each call
// setInterval 3 Triggered      - Every component re-render triggers a NEW setInterval
// .
// .
// .

// setInterval 2 Resolved
// Component Re-Render	

// setInterval 2 Re-Triggered   - Standard setInterval Logic - Repeatedly calls a function or executes a code snippet, with a fixed time delay between each call
// setInterval 4 Triggered      - Every component re-render triggers a NEW setInterval
// .
// .
// .