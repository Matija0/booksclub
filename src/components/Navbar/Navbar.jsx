import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nav'>
      <Link to="/"><h1>HOME</h1></Link>
      <Link to="/about"><h1>ABOUT</h1></Link>
      <Link to="/library"><h1>MY LIBRARY</h1></Link>
    </div>
  )
}

export default Navbar