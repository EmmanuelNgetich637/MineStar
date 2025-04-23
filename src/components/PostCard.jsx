import React from 'react'
import Likesbutton from './Likesbutton'

const PostItem = ({image, likes, caption}) => {
  return (
    <div className='postcard' >
      <image src={image} alt="post image" />
      <div>
        <div>
        <Likesbutton/> <h3>{likes} likes</h3>
        </div>
        <p>{caption}</p>
      </div>
    </div>
  )
}

export default PostItem
