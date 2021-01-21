import React, { useState } from "react";
import styles from "../Exercise.module.css";

/* 🌟 [00] - In this exercise we'll build an app that increments
     and decrements a counter by clicking the + and - buttons. */

/* 🌟 [01] - Please note the numbering of the steps in this exercise
      are not ordered from top to bottom! You can go to step [02] now ;) */

export default function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  /* 🌟 [02] - Implement a function called `decrement` here, which decrements the counter state. */

  return (
    <>
      <h1>Exercise 3</h1>
      <div>
        {/* 🌟 [03] - Add an `onClick` to the button below and call the `decrement` function. */}
        {/* 🌟 [04] - We do not allow negative numbers, so disable the decrement button when `counter` is 0. */}
        <button className={styles.btn}>-</button>
        <span className={styles.counter}>{counter}</span>
        {/* 🌟 [01] - Add an `onClick` to the button below and call the `increment` function. */}
        <button className={styles.btn}>+</button>
      </div>
    </>
  );
}

/* 🌟 [05] - FINISHED! 💯  When clicking the buttons, the counter should decrement or increment. 💯 */
