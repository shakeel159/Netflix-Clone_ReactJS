import React, { useState, useEffect  } from "react";
import { Routes, Route } from "react-router-dom";
import Banner from './img/DarkNightBanner.jpg';
import Sidebar from './Sidebar';
import MainPage from './MainPage';
import FavouritePage from './Fav.js';
import CategoriesPage from './Categories.js';
import AboutPage from './About.js';
import { FaBars } from "react-icons/fa";
import './App.css';
import AboutMoviePage from "./AboutMovie.js";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); 
  };

  return (
    <div className="App">
      <button className="hamburger-btn" onClick={toggleSidebar} aria-label="Open Sidebar">
        <FaBars size={30} />
      </button>

      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <header className="App-header">
        <img className="banner-img" src={Banner} alt="description of image" />
        <div className="Banner-Title">
          <h1>Title</h1>
          <h2>Caegories</h2>
          <h2>describtion</h2>
        </div>
      </header>
      <div className="MainContent">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Favourites" element={<FavouritePage />} />
          <Route path="/Categories" element={<CategoriesPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/AboutMovie" element={<AboutMoviePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
