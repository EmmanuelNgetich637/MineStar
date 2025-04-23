import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import LikeFilter from './components/LikeFilter'
import PostList from './components/PostList'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(data => setPosts(data))
    .catch(error => console.log("You missed something:" + error))
  }, [])

  function handleAddPost(newPost) {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  }
  return (
    <>
      <Header/>
      <Form onAddPost={handleAddPost}/>
      <PostList posts={posts} setPosts={setPosts} />
      <LikeFilter/>
    </>
  )
}

export default App
