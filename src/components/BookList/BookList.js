import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./BookList.css";

const BookList = ({ book }) => {
  const [library, setLibrary] = useState([])
  console.log(library, "lib")
  const add = (val) => {
    if (Object.keys(library) === 0) {
      setLibrary(val)
      localStorage.setItem("key", JSON.stringify(val))
    }
    else {
      setLibrary((data) => {
        return [...data, val]
      })
      save()
    }

  }
  const save = () => {
    localStorage.setItem("key", JSON.stringify(library))
  }
  return (
    <>

      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
        if (thumbnail !== undefined) {
          return (
            <>

              <div className="list-item shadow-lg pt-2 px-3 pb-1 mt-4" key={item.id}>
                <img className=" h-4/6" src={thumbnail} alt="" />
                <div className="mt-3">
                  <h1 className="font-bold text-lg mr-2">
                    Title:{" "}
                    <span className=" font-normal text-md">
                      {item.volumeInfo.title}
                    </span>
                  </h1>
                  <h3 className=" font-bold text-lg mr-2 mt-3">
                    Author:{" "}
                    <span className="font-normal text-md">
                      {item.volumeInfo.authors[0]}
                    </span>
                  </h3>
                </div>
                <button className=" bg-slate-300 w-2/4 py-2 px-3" onClick={() => add(item)}>Add</button>
                <Link to={`/book/${item.id}`}>view</Link>
              </div>

            </>
          );
        }
      })}
    </>
  );
};

export default BookList;
