import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

const Library = () => {
  const [data, setData] = useState(()=>{
    return JSON.parse(localStorage.getItem("key")) || []
});
 
  const remove = () => {
    localStorage.removeItem("key");
  };
  if (!data) {
    return (
      <div>
        <Navbar />
        <h1 className=" text-2xl text-center">No Data!</h1>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <div className="container mx-auto bg-slate-100 p-4 rounded-lg">  
      <div className="flex flex-row flex-wrap gap-3">
        {data.map((item) => (
          <div
            className="flex flex-col w-40 h-64 shadow-lg bg-white"
            key={item.id}
          >
            <img
              className=" h-3/4"
              src={item.volumeInfo.imageLinks.thumbnail}
              alt=""
            />

            <h1 className=" text-sm">{item.volumeInfo.title}</h1>
            <button
              className=" bg-red-600 w-1/4 mx-auto text-white py-1 px-2 rounded-md hover:bg-red-500"
              onClick={() => remove()}
            >
              <i class="bi bi-archive"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Library;
