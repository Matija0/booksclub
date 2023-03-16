import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "./BookList.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const BookList = ({ book}) => {
  const [bookItem, setItem] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  
  return (
    <>
      {book.map((item, index) => {
        let thumbnail =
          item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
        if (thumbnail !== undefined) {
          return (
            <>
              <div className="list-item shadow-lg pt-2 px-3 pb-1 mt-4">
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
                  <button
                    className=" text-lg mt-2  py-1 px-2 rounded-xl border-none bg-blue-500 text-white hover:bg-blue-400"
                    onClick={() => {
                      openModal();
                      setItem(item)
                    }}
                  >open modal</button>
                </div>
              </div>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                key={index}
              >
                <h1>{item.volumeInfo.title}</h1>
                <button
                  onClick={closeModal}
                  className=" bg-black text-white py-2 px-3 rounded-xl text-lg"
                >
                  close
                </button>
              </Modal>
            </>
          );
        }
      })}
    </>
  );
};

export default BookList;
