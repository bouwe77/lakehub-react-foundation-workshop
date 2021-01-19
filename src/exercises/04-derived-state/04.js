import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Exercise 4</h1>
      {/* [01] - Add a CSS style to the div below so the backgroundColor changes depending on `counter` being even or odd. */}
      <div>
        <button style={s.btn} onClick={() => setCounter(counter - 1)}>
          -
        </button>
        <span style={s.counter}>{counter}</span>
        <button style={s.btn} onClick={() => setCounter(counter + 1)}>
          +
        </button>
      </div>
    </>
  );
}

/* [02] - FINISHED! 💯  When clicking the buttons, the background color should toggle depending on an even or odd number. 💯 */

const s = {
  btn: {
    width: "80px",
    height: "80px",
    fontSize: "60px",
    margin: "20px"
  },
  counter: {
    fontSize: "60px"
  }
};
