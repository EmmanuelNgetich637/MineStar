import React, { useState } from "react";

export default function LikeButton({ initialLikes, postId, onLike }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const handleClick = () => {
    const newLikeStatus = !isLiked;
    const updatedLikes = newLikeStatus ? likes + 1 : likes - 1;
  
    setIsLiked(newLikeStatus);
    setLikes(updatedLikes);
  
    // Update the likes in db.json
    fetch(`http://localhost:3000/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: updatedLikes }),
    })
      .then(res => res.json())
      .then(updatedPost => {
        if (onLike) {
          onLike(postId, updatedPost.likes); // optional callback
        }
      });
  };
  

  return (
    <button onClick={handleClick} className="like-btn">
      {isLiked ? "❤️" : "🤍"} {likes}
    </button>
  );
}