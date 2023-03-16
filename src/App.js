import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import BookList from "./components/BookList/BookList"
import BookDetails from "./components/BookDetails/BookDetails"
import "./index.css"

function App() {
  return (
    <div className="App">
    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/book" element={<BookList/>}/>
            <Route path="/book/:id" element={<BookDetails/>}/>
          </Routes>
        </BrowserRouter>
      
      
    </div>
  );
}

export default App;
