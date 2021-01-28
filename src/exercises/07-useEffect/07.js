import React, { useEffect, useState } from "react";
import { getGifs } from "./giphy";

/* 🌟 [00] - In this exercise we'll build an app that fetches
   Giphy data using the useEffect hook. */

const query = "programming";

export default function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    /* 🌟 [01] - Create an async function called fetch (or whatever you like). */
    /* 🌟 [02] - Inside the fetch function, uncomment the line below to call the Giphy API. */
    //const gifs = await getGifs(query);
    /* 🌟 [03] - Inside the fetch function, update the gifs state with the gifs you got from the API. */
    /* 🌟 [04] - Outside the fetch function, but inside the useEffect, call the fetch function. */
  }, []); /* 🌟 [05] - Is this dependency array correct? In other words, does this useEffect have any dependencies? */

  return (
    <>
      <h1>Exercise 7</h1>
      {gifs.map((gif, index) => (
        <video key={index} autoPlay loop src={gif} />
      ))}
    </>
  );
}

/* 🌟 [06] - FINISHED! 💯  You should see a few GIFs about "programming", or whatever the value of query is... 💯 */
