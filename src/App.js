import React from "react";
import { BrowserRouter, Route, Routes,  useParams } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import BookList from "./components/BookList/BookList"
import BookDetails from "./pages/BookDetails/BookDetails";
import "./index.css"



function App() {
  return (
    
    <div className="App">
    
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route path="book">
              <Route path=":id" element={<BookDetails/>}/>
            </Route>
            <Route exact path="/library" element={<Library/>}/>
          </Routes>
        </BrowserRouter>
      
      
    </div>
  );
}

export default App;
