import React, { useState } from "react";
import { getGifs } from "../07-useEffect/giphy";

/* 🌟 [00] - In this exercise we'll finish a class component that fetches GIFs from the Giphy API.
      When finished, we implement the same but then with useEffect in a function component. */

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      data: []
    };
  }

  /* 🌟 [01] - Using the appropriate lifecycle method, call the getGifs function and pass the query state 
  to fetch GIFs from the Giphy API. */

  render() {
    return (
      <>
        <h1>Exercise 8 - part 2</h1>
        <div>
          {this.state.gifs.map((gif, index) => (
            <video key={index} autoPlay loop src={gif} />
          ))}
        </div>
      </>
    );
  }
}

/* 🌟 [02] - Remove the export default from the class component and add it to the function component below: */

function App2() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("");

  /* 🌟 [03] - Create a text box where users enter the query. Update the query state with the text box value. */

  /* 🌟 [04] - Using the useEffect hook, call the getGifs function and pass the query state 
  to fetch GIFs from the Giphy API. Hint: you've done this before in another exercise... ;) */

  return (
    <>
      <h1>Exercise 8 - part 2</h1>
      <div>
        {gifs.map((gif, index) => (
          <video key={index} autoPlay loop src={gif} />
        ))}
      </div>
    </>
  );
}

/* 🌟 [05] - FINISHED! 💯  You should see a few GIFs about whatever the value of query is... 💯 */
