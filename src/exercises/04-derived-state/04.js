import React, { useState } from "react";
import styles from "../Exercise.module.css";

/*
┌─┐┬  ┌─┐┌─┐┌─┐┌─┐  ┌┬┐┌─┐  ┌┐┌┌─┐┌┬┐  ┬ ┬┌─┐┌─┐  ┬ ┬┌─┐┌┬┐
├─┘│  ├┤ ├─┤└─┐├┤    │││ │  ││││ │ │   │ │└─┐├┤   └┬┘├┤  │ 
┴  ┴─┘└─┘┴ ┴└─┘└─┘  ─┴┘└─┘  ┘└┘└─┘ ┴   └─┘└─┘└─┘   ┴ └─┘ ┴ 
This is still under construction...
*/

/* 🌟 [00] - In this exercise we'll build an app that changes 
     the background color depending on (i.e. deriving from) 
     a state value. */

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Exercise 4</h1>
      {/* 🌟 [01] - Add a CSS style to the div below so the backgroundColor changes depending on `counter` being even or odd. */}
      <div>
        <button className={styles.btn} onClick={() => setCounter(counter - 1)}>
          -
        </button>
        <span className={styles.counter}>{counter}</span>
        <button className={styles.btn} onClick={() => setCounter(counter + 1)}>
          +
        </button>
      </div>
    </>
  );
}

/* 🌟 [02] - FINISHED! 💯  When clicking the buttons, the background color should toggle depending on an even or odd number. 💯 */
