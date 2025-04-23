import React from 'react'
import Likesbutton from './Likesbutton'

const PostCard = ({image, likes, caption}) => {
  return (
    <div className='postcard' >
      <img src={image} alt="post image" />
      <div>
        <div>
        <Likesbutton/> <h3>{likes} likes</h3>
        </div>
        <p>{caption}</p>
      </div>
    </div>
  )
}

export default PostCard
