import React from 'react'
import Navbar from "../Navbar/Navbar"
import SearchForm from "../SearchForm/SearchForm"
import "./Header.css"

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar/>
            <div className='main-h'>
              <h1>Find your book of choice.</h1>
              <p>Occaecat consequat aute et magna nostrud laboris do. Laboris sit consequat proident excepteur cillum incididunt duis et cillum tempor cupidatat. Ea reprehenderit in sit labore mollit proident enim officia. Culpa excepteur qui ad veniam commodo nostrud veniam non duis. Eiusmod aute officia ullamco irure voluptate irure adipisicing officia irure quis tempor minim aliqua. Ex do fugiat esse sunt aliqua duis anim amet ex irure laborum cupidatat eu irure. Aliquip anim laborum sit id qui duis tempor sit deserunt minim.</p>
              <SearchForm/>
             </div>
        </header>
    </div>
  )
}

export default Header