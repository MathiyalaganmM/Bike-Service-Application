import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About, Contact, Home, Services} from "./components/pages";
import {Footer} from './components/pages/Footer'
import {Login} from './components/pages/Login'
import {Book} from './components/pages/Book'
import {Admin} from './components/pages/Admin'
import { useEffect, useState } from "react";



function App() {



  



  return (
    <>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book/>}/>
        {/* Admin routes */}
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <br/>
      <br/>
      <Footer />
    </div>
    
    </>
  );
}

export default App;
