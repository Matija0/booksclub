import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nav'>
      <Link to="/"><h1 className=' hover:text-gray-700 cursor-pointer'>HOME</h1></Link>
      <Link to="/about"><h1 className=' hover:text-gray-700 cursor-pointer'>ABOUT</h1></Link>
      <Link to="/library"><h1 className=' hover:text-gray-700 cursor-pointer'>MY LIBRARY</h1></Link>
    </div>
  )
}

export default Navbar