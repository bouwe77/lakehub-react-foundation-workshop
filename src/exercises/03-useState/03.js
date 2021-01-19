import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  /* [02] - Implement a function called `decrement` here, which decrements the counter state. */

  return (
    <>
      <h1>Exercise 3</h1>
      <div>
        {/* [03] - Add an `onClick` to the button below and call the `decrement` function. */}
        {/* [04] - We do not allow negative numbers, so disable the decrement button when `counter` is 0. */}
        <button style={s.btn}>-</button>
        <span style={s.counter}>{counter}</span>
        {/* [01] - Add an `onClick` to the button below and call the `increment` function. */}
        <button style={s.btn}>+</button>
      </div>
    </>
  );
}

/* [05] - FINISHED! 💯  When clicking the buttons, the counter should decrement or increment. 💯 */

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
