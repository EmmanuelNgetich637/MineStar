import { useEffect, useState } from 'react'
import { Routes, Route,Link } from 'react-router-dom'
import './App.css'
import Form from './components/Form'
import LikeFilter from './components/LikeFilter'
import PostList from './components/PostList'
import LikedPage from './components/LikedPage';

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
    <div>
      
      <Routes>
          <Route path="/" element={<PostList posts={posts} setPosts={setPosts} />} />
          <Route path="/form" element={<Form onAddPost={handleAddPost} />} />
          <Route path="/liked" element={<LikedPage posts={posts} setPosts={setPosts} />} />
      </Routes>
      
    </div>
  )
}

export default App
