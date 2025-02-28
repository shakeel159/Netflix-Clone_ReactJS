import React, { useState } from "react";
import Banner from './img/DarkNightBanner.jpg';
import Sidebar from './Sidebar';
import MainPage from './MainPage';
import { FaBars } from "react-icons/fa";
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); 
  };
  return (
    <div className="App">
      <div>
        <Sidebar toggleSidebar={toggleSidebar}></Sidebar>
      </div>
      <button className="hamburger-btn" onClick={toggleSidebar} aria-label="Open Sidebar">
        <FaBars size={30} />
      </button>

      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <header className="App-header">
        <img src={Banner} alt="description of image" />
      </header>
      <div className="MainContent">
        <MainPage></MainPage>
      </div>
    </div>
  );
}

export default App;
