import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'

const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(data => setPosts(data))
    .catch(error => console.log("You missed something:" + error))
  }, [])

  const data = posts.map(post =>{
    return <PostCard key={post.id} image={post.image} likes={post.likes} caption={post.caption} />
  })

  return (
    <div>
      {data}
    </div>
  )
}

export default PostList
