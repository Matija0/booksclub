
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./BookDetails.css";

const BookDetails = () => {
    const { id } = useParams();
    const URL = `https://www.googleapis.com/books/v1/volumes/${id}`;
    const [bookData, setData] = useState();
    const getData = () => {
        axios
            .get(URL)
            .then((res) => {
                setData(res.data.volumeInfo)
                console.log(res.data)
            })
            .catch((err) => console.log(err));

    };
    useEffect(() => {
        getData();
    }, [id]);


    return (
        <>
            <Navbar />
            
            <div className=" container mx-auto bg-gray-200 mt-5 p-5 rounded-lg flex flex-row gap-5">
                <div className=" w-2/5">
                    <img
                        className=" w-4/5 h-full mx-auto"
                        src={bookData.imageLinks.thumbnail}
                        alt="Book Cover"
                    />
                </div>
                <div className=" flex flex-col items-start w-3/5">
                    <h1 className=" text-xl font-bold">{bookData.title}</h1>
                    {bookData.subtitle ? (
                        <h2 className=" text-lg font-bold mb-3">
                            {bookData.subtitle}
                        </h2>
                    ) : null}
                    <h3 className="my-2">
                        by: {bookData.authors[0]}{" "}
                        {bookData.authors[1]
                            ? `and ${bookData.authors[1]}`
                            : null}
                    </h3>
                    <p className=" text-sm mt-2 ">{bookData.description}</p>
                    <button className=" border-none rounded-lg bg-orange-400 text-white py-2 px-3 mt-4 hover:bg-orange-300">
                        Add to Library
                    </button>
                </div>
            </div>
            <div className=" container mx-auto flex flex-col gap-3 mt-10 mb-4">
                <h1 className=" text-lg font-bold ">Book Details</h1>
                <span>Paperback: {bookData.pageCount}</span>
                <span>Published: {bookData.publishedDate}</span>
                <span>Publisher: {bookData.publisher}</span>
                <span>Categories: {bookData.categories[0]}</span>
                <span>Language: {bookData.language}</span>
                <span>Book ID: {id}</span>
            </div>
        </>
    );
};

export default BookDetails;
