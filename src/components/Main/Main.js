import React, { useState } from 'react'
import "./Main.css"
import axios from 'axios';
import BookList from '../BookList/BookList';
import Loader from "../../images/loader1.svg"

const Main = () => {
  const KEY = "AIzaSyDClgLVH9leBAUobjdreNkj6aQJDem4yDU"
  const URL = "https://www.googleapis.com/books/v1/volumes?q="
  const [search, setSearch] = useState("")
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)
  const searchBook = (e) => {
    setLoader(true)
    e.preventDefault();
    axios.get(`${URL}${search}&key=${KEY}&maxResults=30`).then((res) => {
      setData(res.data.items)

      setLoader(false)
    })
      .catch((err) => {
        console.log(err)
        setLoader(false)
      });

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
                <input className='input' placeholder='The lost World...' type="text" value={search} onChange={e => setSearch(e.target.value)} />
                <button type='submit' className=' bg-gray-800 border-none rounded-xl text-white hover:bg-gray-700 py-3 px-4 mt-4'>SEARCH</button>
              </form>
            </div>
          </div>
        </header>
        {loader ? (<div className=" bg-white container mx-auto mt-12 flex flex-row justify-center"><img className=" w-1/4" src={Loader} /></div>) : null}

        <div className=' container  mx-auto pb-9'>
          <div className='flex flex-row flex-wrap gap-5'>
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