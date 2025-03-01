import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Sidebar.css';

function Sidebar({ isSidebarOpen, toggleSidebar }){
    return (
        <div className={`SideBar_Background ${isSidebarOpen ? 'open' : ''}`}>
            {/* Close Button */}
            <div onClick={toggleSidebar} role="button" className="hamburger-btn" tabIndex="0" onKeyDown={(e) => e.key === 'Enter' && toggleSidebar()}>
                <FaTimes className="hamburger_Icon" size={30} color="white" />
            </div>
            <div className="Side_Buttons">
            <nav>
                <Link to="/" className="nav-link">
                    <h1>Home</h1>
                </Link>
                <Link to="/Favourites" className="nav-link">
                    <h1>Favourites</h1>
                </Link>
                <Link to="/Categories" className="nav-link">
                    <h1>Categories</h1>
                </Link>
                <Link to="/About" className="nav-link">
                    <h1>About</h1>
                </Link>
            </nav>
            </div>
        </div>
    );
}

export default Sidebar;