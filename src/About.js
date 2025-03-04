import React from "react";
import './AboutPage.css';

function AboutPage(){
    return (
        <div className="TopGap">
           <h1>About Page</h1>
           <p className="description_About">react.js web application created with TMDB API to allow users to be able to search movies 
            and obtain certien information about them. this is not a proper functioning site but a personal project
            showcasing my ability to apply API to an application and ability to programe a functional site.
           </p>
        </div>
    );
}

export default AboutPage;