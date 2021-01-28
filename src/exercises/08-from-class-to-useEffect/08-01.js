import React from "react";

/* 🌟 [00] - In this exercise we'll convert a class component
      with side effects to a function component with useEffect. */

/* 🌟 [01] - Check out this class component. It displays which key was pressed. */

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyPressed: null
    };
  }

  componentDidMount() {
    window.addEventListener("keypress", this.keyPressed);
  }

  componentWillUnmount() {
    window.removeEventListener("keypress", this.keyPressed);
  }

  keyPressed = (event) => {
    console.log(event.keyCode);
    this.setState({ ...this.state, keyPressed: event.keyCode });
  };

  render() {
    return (
      <>
        <h1>Exercise 8 - part 1</h1>
        <div>Key pressed: {this.state.keyPressed}</div>
      </>
    );
  }
}

/* 🌟 [02] - Remove the export default from the class component and add it to the function component below: */

function App2() {
  const keyPressed = null;

  /* 🌟 [03] - Add an useEffect that adds the event listener, but only after the first render of the component. */
  /* 🌟 [04] - To clean up the event handler, let useEffect return a function that removes the event listener. */

  return (
    <>
      <h1>Exercise 8 - part 1</h1>
      <div>Key pressed: {keyPressed}</div>
    </>
  );
}

/* 🌟 [05] - FINISHED! 💯  Verify the App2 component now also displays the keys you press... 💯 */
