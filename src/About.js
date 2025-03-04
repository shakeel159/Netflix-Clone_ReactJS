import React from "react";
import './AboutPage.css';

function AboutPage(){
    return (
        <div className="TopGap">
           <h1>About Page</h1>
           <p className="description_About">react.js web application created with TMDB API to allow users 
            to be able to search movies and obtain certien information about them. This is not a properly 
            functioning site, but it is a personal project showcasing my ability to apply API to an 
            application and my ability to program a functional site.
           </p>
        </div>
    );
}

export default AboutPage;