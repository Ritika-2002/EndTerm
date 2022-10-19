import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import Login from './Login';
import Read from './Read';
import Update from './Update';
import './index.css';
// import './App.css';
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <>
            {/* we use switch, so that we can only see a desire page from the multiple pages */}
            <Navbar/>
            <Routes> 
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/services" element={<Services/>} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/read" element={<Read />} />
                <Route exact path="/update" element={<Update />} />
                
            </Routes>
            <Footer />
             
        </>
    )
}

export default App;