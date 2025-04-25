import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (

      <nav className='nav-header'>
        <div className='headbox'>
        <Link to="/"><h1 className='heading'>MineStar ✧</h1></Link>
        </div>
       <div className='navs'>
        <Link to="/form"><button className='addbutton' >+</button></Link> 
        <Link to="/liked"> <button className='likesbutton'>💚</button> </Link> 
      </div> 
      </nav>
  )
}

export default Header
