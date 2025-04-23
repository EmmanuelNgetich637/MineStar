import React from 'react'
import LikeButton from './LikeButton'
import DeleteButton from './DeleteButton'
import EmojiPicker from './EmojiPicker';

const PostCard = ({image, likes, caption, id, setPosts, posts}) => {

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleDelete = (postId) => {
    fetch(`http://localhost:3000/posts/${postId}`, {
      method: "DELETE"
    })
    .then(() => {
      setPosts(posts.filter(post => post.id !== postId));
    });
  };
  return (
    <div className='postcard' >
      <img src={image} alt="post image" />
      <div>
        <div>
          <LikeButton initialLikes={likes} postId={id} onLike={()=> handleLike(id)} />
          <EmojiPicker/>
        </div>
        <p>{caption}</p>
      </div>
      <DeleteButton onDelete={() => handleDelete(id)} />
    </div>
  )
}

export default PostCard
