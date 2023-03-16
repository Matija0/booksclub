import React, { useEffect, useRef } from 'react'
import "./SearchForm.css"


const SearchForm = () => {

  

 
  
  return (
      <div className='search-form'>
        <form className='form-el' >
          <input className='input' placeholder='The lost World...' type="text"/>
          <button type='submit' className='btn'>SEARCH</button>
        </form>
      </div>
    
  )
}

export default SearchForm