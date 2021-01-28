import React, { useState } from "react";
import styles from "../Exercise.module.css";

/* 🌟 [00] - In this exercise we'll build an app where you can choose a text 
      to display. Displaying the text and choosing the text are done by different
      components so we lifted the text state to the parent component. The child component
      needs to receive a so-called callback prop to update the text state. */

export default function App() {
  const [text, setText] = useState("");

  return (
    <>
      <h1>Exercise 6</h1>

      <div>
        <Panel>{text}</Panel>
      </div>
      <div>
        {/* 🌟 [01] - Pass a prop named setText with the setText fuction as value. This is the callback prop. */}
        <ChooseText />
      </div>
    </>
  );
}

/* 🌟 [02] - Receive the setText prop here. */
function ChooseText() {
  const texts = [
    "Hello LakeHub",
    "React is Cool",
    "Lorem ipsum...",
    "YES!!! It works!"
  ];

  return (
    <div className={styles["panel-2"]}>
      {/* 🌟 [03] - For each text in the texts array, render a Button component that wraps the text. Hint: use the array.map() function. */}
      {/* 🌟 [04] - Add an onClick to the Button that calls the setText callback prop and passes the text. */}
      <br />
      {/* 🌟 [05] - Add an onClick to the clear button below that calls setText to make it empty. */}
      <Button>🗑</Button>
    </div>
  );
}

/* 🌟 [06] - FINISHED! 💯  When you click one of the text buttons the text should appear in the green panel. 💯 */

// ==================================================================
// No need to change the components below

function Button({ children, ...rest }) {
  return (
    <button style={{ margin: "5px" }} {...rest}>
      {children}
    </button>
  );
}

function Panel({ children, ...rest }) {
  return (
    <div
      className={styles.panel}
      style={{ height: "20px", margin: "auto" }}
      {...rest}
    >
      {children}
    </div>
  );
}
