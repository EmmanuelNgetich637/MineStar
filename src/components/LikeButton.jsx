import React, { useState } from "react";

export default function LikeButton({ initialLikes, postId, onLike }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const handleClick = () => {
    const newLikeStatus = !isLiked;
    setIsLiked(newLikeStatus);
    setLikes(newLikeStatus ? likes + 1 : likes - 1);
    onLike(postId, newLikeStatus);
  };

  return (
    <button onClick={handleClick} className="like-btn">
      {isLiked ? "❤️" : "🤍"} {likes}
    </button>
  );
}