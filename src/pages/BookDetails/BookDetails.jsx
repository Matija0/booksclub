import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./BookDetails.css"

const BookDetails = () => {
  const { id } = useParams();
  const URL = `https://www.googleapis.com/books/v1/volumes/${id}`;
   const [bookData, setData]=useState([]) 
  useEffect(()=>{
    axios.get(URL).then(res=>setData(res.data)).catch(err=>console.log(err))
  },)
  console.log(bookData, "DATA")
  return (
    <>
    <Navbar/>
    <div className=" container mx-auto bg-gray-200 mt-5 p-5 rounded-lg flex flex-row gap-5">
    <div className=" w-2/5"><img className=" w-2/5 h-3/5 mx-auto" src={bookData.volumeInfo.imageLinks.thumbnail} alt="Book Cover" /></div>
      <div className=" flex flex-col items-start w-3/5">
        <h1 className=" text-xl font-bold">{bookData.volumeInfo.title}</h1>
        {bookData.volumeInfo.subtitle? (<h2 className=" text-lg font-bold mb-3">{bookData.volumeInfo.subtitle}</h2>) : null}
        <h3 className="my-2">by: {bookData.volumeInfo.authors[0]} {bookData.volumeInfo.authors[1]? (`and ${bookData.volumeInfo.authors[1]}`): null}</h3>
        <p className=" text-sm mt-2 ">{bookData.volumeInfo.description}</p>
        <button className=" border-none rounded-lg bg-orange-400 text-white py-2 px-3 mt-4 hover:bg-orange-300">Add to Library</button>
      </div>
      
    </div>
    <div className=" container mx-auto flex flex-col gap-3 mt-10 mb-4">
        <h1 className=" text-lg font-bold ">Book Details</h1>
        <span>Paperback: {bookData.volumeInfo.pageCount}</span>
        <span>Published: {bookData.volumeInfo.publishedDate}</span>
        <span>Publisher: {bookData.volumeInfo.publisher}</span>
        <span>Categories: {bookData.volumeInfo.categories[0]}</span>
        <span>Language: {bookData.volumeInfo.language}</span>
        
      </div>
    </>
  );
};

export default BookDetails;
