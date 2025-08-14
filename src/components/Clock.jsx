import { useEffect, useState } from "react";

export function Clock() {

  const [ secondsCounter, setSecondsCounter ] = useState(0);

  // The block within the useEffect hook is moved outside the rendering calculation and is solely dictated by the dependency array
  // Hence, the name "Side Effect"

  // A blank dependency array will only trigger the side effect once on first-render
  // A dependency array with a state variable will trigger the side effect on both first-render as well as any time the state changes

  useEffect(() => console.log("FIRST RENDER EXCLUSIVE LOG!\nEmpty dependency array test - useEffect"), []);
  useEffect(() => console.log("CLOCK COMPONENT RENDERED!\nSeconds Counter: " + secondsCounter), [ secondsCounter ]);

  useEffect(() => {

    // The setInterval() method calls a function at specified intervals (in milliseconds)
    setInterval(() => {

      console.log("SET INTERVAL RESOLVED!\nSeconds Counter when setInterval was triggered: " + secondsCounter);
      setSecondsCounter(prevSecondsCounter => prevSecondsCounter + 10);

    }, 10000);  // 10s for better logging/understanding

  }, []);

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