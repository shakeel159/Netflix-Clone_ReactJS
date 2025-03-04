import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card"; 
import './Fav.css';

function Sidebar(){

    const [likedMovies, setLikedMovies] = useState([]);

    useEffect(() => {
        //retrieve from local storage
        const storedLikedMovies = JSON.parse(localStorage.getItem('likedMovies')) || [];
        setLikedMovies(storedLikedMovies);
    }, []);
    
    return (
        <div>
            <h1>Liked Movies</h1>
            {likedMovies.length > 0 ? (
                <div className="likedMoviesContainer">

                    <div div className="column">
                    {likedMovies.map((movie) => (
                        <Card
                        key={movie.id}
                        img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        title={movie.title}
                        description={movie.overview}
                        movieData={movie}
                        fullDescription={false}
                    />
                    ))}
                    </div>
                    
                </div>
            ) : (
                <p>No liked movies found.</p>
            )}
        </div>
    );
}

export default Sidebar;