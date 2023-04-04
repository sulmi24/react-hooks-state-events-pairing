import React from "react";
import Comment from "./Comment";

function ListComments({ video, commets }) {
  return (
    <div>
      <Comment video={video} commets={commets} />
    </div>
  );
}

export default ListComments;
