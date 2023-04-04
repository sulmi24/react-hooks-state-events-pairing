import React, { useState } from "react";

function Video({ video, handle, commets }) {
  const [increment, setIncrement] = useState(9210);
  const [Decrement, setDecrement] = useState(185);

  function handleIncrement() {
    setIncrement(increment + 1);
  }
  function handleDecrement() {
    setDecrement(Decrement - 1);
  }

  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>
        {video.views} Views | Uploded {video.createdAt}
      </p>
      <button onClick={handleIncrement}>{increment} 👍</button>{" "}
      <button onClick={handleDecrement}>{Decrement} 👎</button> <br />
      <button onClick={handle}> {commets ? "Hide" : "Show"} Comments</button>
    </div>
  );
}

export default Video;
