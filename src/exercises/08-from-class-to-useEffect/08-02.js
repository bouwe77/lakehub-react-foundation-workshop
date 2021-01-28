import React from "react";

/* 🌟 [00] - In this exercise we'll convert a class component
      with side effects to a function component with useEffect. */

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pokemons !== this.state.pokemons) {
      console.log("pokemons state has changed.");
    }
  }

  render() {
    return (
      <>
        <h1>Exercise 8 - part 2</h1>
        <div>TO DO...</div>
      </>
    );
  }
}

/* 🌟 [xx] - Remove the export default from the class component and it to the function component below: */

function App2() {
  return (
    <>
      <h1>Exercise 8 - part 2</h1>
      <div>TO DO...</div>
    </>
  );
}

/* 🌟 [xx] - FINISHED! 💯  You should ... ... ... 💯 */
