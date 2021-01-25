import React from "react";

/*
┌─┐┬  ┌─┐┌─┐┌─┐┌─┐  ┌┬┐┌─┐  ┌┐┌┌─┐┌┬┐  ┬ ┬┌─┐┌─┐  ┬ ┬┌─┐┌┬┐
├─┘│  ├┤ ├─┤└─┐├┤    │││ │  ││││ │ │   │ │└─┐├┤   └┬┘├┤  │ 
┴  ┴─┘└─┘┴ ┴└─┘└─┘  ─┴┘└─┘  ┘└┘└─┘ ┴   └─┘└─┘└─┘   ┴ └─┘ ┴ 
This is still under construction...
*/

/* 🌟 [00] - In this exercise we'll convert a class component
      with side effects to a function component with useEffect. */

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
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
    this.setState({ ...this.state, counter: this.state.counter + 1 });
  };

  componentDidUpdate() {
    console.log("render...");
  }

  render() {
    return <>{this.state.counter}This is a CLASS component... 🤮 </>;
  }
}

/* 🌟 [xx] - Remove the export default from the class component and it to the function component below: */

function App2() {
  return (
    <>
      <h1>Exercise 8</h1>
    </>
  );
}

/* 🌟 [xx] - FINISHED! 💯  You should ... ... ... 💯 */
