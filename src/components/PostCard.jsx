import React from 'react'
import LikeButton from './LikeButton'
import DeleteButton from './DeleteButton'

const PostCard = ({image, likes, caption, id, setPosts, posts}) => {
  const handleDelete = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };
  return (
    <div className='postcard' >
      <img src={image} alt="post image" />
      <div>
        <div>
        <LikeButton initialLikes={likes} postId={id} />
        </div>
        <p>{caption}</p>
      </div>
      <DeleteButton onDelete={() => handleDelete(id)} />
    </div>
  )
}

export default PostCard
