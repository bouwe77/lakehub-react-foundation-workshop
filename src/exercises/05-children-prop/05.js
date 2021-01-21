import React from "react";
import styles from "../Exercise.module.css";

/* 🌟 [00] - In this exercise we'll build an app that displays
      a green panel that can contain any sort of content using
      the children prop. */

export default function App() {
  return (
    <>
      <h1>Exercise 5</h1>
      <Panel>
        {/* 🌟 [01] - Place some content inside the Panel component here. */}
      </Panel>
    </>
  );
}

/* 🌟 [02] - Use the children prop so any content inside the Panel is rendered. */
function Panel() {
  return <div className={styles.panel}></div>;
}

/* 🌟 [03] - Render another Panel component, but this time one that shows this image: */
/* 
  <img src="https://picsum.photos/id/2/200" alt="laptop" /> 
*/

/* 🌟 [04] - You could also put multiple elements or components inside the Panel - Experiment with that! */

/* 🌟 [05] - FINISHED! 💯  You have successfully experimented with the children prop */
/* and saw this is a nice way to create reusable UI components that contain anything! 💯 */
