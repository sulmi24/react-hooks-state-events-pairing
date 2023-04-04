import video from "../data/video.js";
import ListComments from "./ListComments.jsx";
import Video from "./Video.jsx";
import React, { useState } from "react";

function App() {
  console.log("Here's your data:", video);
  const [commets, setCommets] = useState(false);
  function handle() {
    setCommets((commets) => !commets);
  }
  let hide = commets ? "none" : "block";
  return (
    <div className="App">
      <Video video={video} handle={handle} commets={commets} />
      <ListComments video={video} commets={hide} />
    </div>
  );
}

export default App;
