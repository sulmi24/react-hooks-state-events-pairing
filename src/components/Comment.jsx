import React from "react";

function Comment({ video, commets }) {
  return (
    <div style={{ display: commets }}>
      <h1>{video.comments.length} Comments</h1>
      {video.comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h1>{comment.user}</h1>
            <p>{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Comment;
