import React, { useState } from 'react'
import "./Main.css"
import axios from 'axios';
import BookList from '../BookList/BookList';

const Main = () => {
   const KEY= "AIzaSyDClgLVH9leBAUobjdreNkj6aQJDem4yDU" 
   const URL= "https://www.googleapis.com/books/v1/volumes?q="
   const [search, setSearch]= useState("")
   const [data, setData]= useState([])
   const searchBook=(e)=>{
       e.preventDefault();
        axios.get(`${URL}${search}&key=${KEY}`).then(res=>setData(res.data.items)).catch(err=>console.log(err))
        
   } 
   console.log(data)
  return (
    <div className='main'>
        <div className='holder'>
        <header className='header'>
            
            <div className='main-h'>
              <h1>Find your book of choice.</h1>
              <p>Occaecat consequat aute et magna nostrud laboris do. Laboris sit consequat proident excepteur cillum incididunt duis et cillum tempor cupidatat. Ea reprehenderit in sit labore mollit proident enim officia. Culpa excepteur qui ad veniam commodo nostrud veniam non duis. Eiusmod aute officia ullamco irure voluptate irure adipisicing officia irure quis tempor minim aliqua. Ex do fugiat esse sunt aliqua duis anim amet ex irure laborum cupidatat eu irure. Aliquip anim laborum sit id qui duis tempor sit deserunt minim.</p>
              <div className='search-form'>
                <form className='form-el' onSubmit={searchBook} >
                    <input className='input' placeholder='The lost World...' type="text" value={search} onChange={e=>setSearch(e.target.value)}  />
                    <button type='submit' className='btn'>SEARCH</button>
                </form>
              </div>
             </div>
        </header>
        <div className=' container  mx-auto'>
          <div className='grid grid-cols-4 gap-4'>
            {
              <BookList book={data} />
            }
          </div>
        </div>
    </div>
    </div>
  )
}

export default Main