import React, { useEffect, useState } from "react";
import { getGifs } from "./giphy";
import axios from "axios";

/*
┌─┐┬  ┌─┐┌─┐┌─┐┌─┐  ┌┬┐┌─┐  ┌┐┌┌─┐┌┬┐  ┬ ┬┌─┐┌─┐  ┬ ┬┌─┐┌┬┐
├─┘│  ├┤ ├─┤└─┐├┤    │││ │  ││││ │ │   │ │└─┐├┤   └┬┘├┤  │ 
┴  ┴─┘└─┘┴ ┴└─┘└─┘  ─┴┘└─┘  ┘└┘└─┘ ┴   └─┘└─┘└─┘   ┴ └─┘ ┴ 
This is still under construction...
*/

/* 🌟 [00] - In this exercise we'll build an app that fetches
   data using the useEffect hook. */

const query = "programming";

export default function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    async function fetch() {
      const gifs = await getGifs(query);
      setGifs(gifs);
    }
    fetch();
  }, []);

  return (
    <>
      <h1>Exercise 7</h1>
      {gifs.map((gif, index) => (
        <video key={index} autoPlay loop src={gif} />
      ))}
    </>
  );
}

/* 🌟 [xx] - FINISHED! 💯  You should ... ... ... 💯 */
