import React from 'react'
import LikeButton from './LikeButton'
import DeleteButton from './DeleteButton'

const PostCard = ({image, likes, caption, id, setPosts, posts}) => {

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };
  return (
    <div className='postcard' >
      <img src={image} alt="post image" />
      <div>
        <div>
        <LikeButton initialLikes={likes} postId={id} onLike={()=> handleLike(id)} />
        </div>
        <p>{caption}</p>
      </div>
      <DeleteButton />
    </div>
  )
}

export default PostCard
