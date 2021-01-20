import React from "react";

export default function App() {
  return (
    <>
      <h1>Exercise 6</h1>
      <Box>hello hello hello hello</Box>
      <Box>hello hello hello hello</Box>
    </>
  );
}

function Box({ children }) {
  return <div style={s.box}>{children}</div>;
}

/* [xx] - FINISHED! 💯  You should ... ... ... 💯 */

const s = {
  box: {
    border: "4px solid green",
    minWidth: "50px",
    minHeight: "50px",
    margin: "10px"
  }
};
