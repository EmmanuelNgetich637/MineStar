import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>

      <h1>MineStar ✧</h1>

      <nav>
      <button><strong> <Link to="/">Posts</Link> </strong></button>
      <button><strong> <Link to="/form">+ Add</Link> </strong></button>
      <button><strong> <Link to="/liked"> ❤️ </Link> </strong></button>
      </nav>
      
    </div>
  )
}

export default Header
