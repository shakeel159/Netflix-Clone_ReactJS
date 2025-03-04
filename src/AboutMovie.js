import { useLocation } from "react-router-dom";
import { WhereToWatch } from "./APICalls";
import './AboutMovie.css';
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';



function AboutMoviePage(){
    const location = useLocation();
    const movie = location.state?.movie;
    const [likedMovies, setLikedMovies] = useState([]);

    const [providers, setProviders] = useState([]);

    useEffect(() => {
        // Retrieve liked movies from localStorage if available
        const storedLikedMovies = JSON.parse(localStorage.getItem('likedMovies')) || [];
        setLikedMovies(storedLikedMovies);
    }, []);

    useEffect(() => {
        const fetchProviders = async () =>{
            if(!movie) return;
            try{
                const data = await WhereToWatch(movie.id);
                // Extract providers from the first available country (e.g., US)
                const availableCountries = Object.keys(data);
                console.log("Available Countries:", availableCountries);
                
                let streamingOptions = [];
                let selectedCountry = null;
                
                for (let country of availableCountries) {
                    if (data[country]?.flatrate) {
                        streamingOptions = data[country].flatrate;
                        selectedCountry = country;
                        console.log(`Found providers in: ${selectedCountry}`, streamingOptions);
                        break; // Stop after finding the first country with providers
                    }
                }
                setProviders(streamingOptions);
            }
            catch (error){
                console.log("Error fetching providers", error);
            }
        }
        fetchProviders();
    }, [movie]);

    const handleLike = () => {
        setLikedMovies(prevLikedMovies => {
            const isLiked = prevLikedMovies.some(likedMovie => likedMovie.id === movie.id);
            let updatedLikedMovies;
            if(isLiked) {
                //if already liked remove from list
                updatedLikedMovies = prevLikedMovies.filter(likedMovie => likedMovie.id !== movie.id);
            }
            else {
                // Otherwise, add to the list
                updatedLikedMovies = [...prevLikedMovies, movie];
            }
            // Save to localStorage
            localStorage.setItem('likedMovies', JSON.stringify(updatedLikedMovies));
            return updatedLikedMovies;
        });
    };

    if(!movie) {
        return <p>No movie data found.</p>
    }

    return (
        <div>
            <div className="TopGap">
                <h1>{movie.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
                <div>
                    <FontAwesomeIcon icon={faThumbsUp} size="2x" className="LikeBTN" onClick={handleLike}/>
                </div>
                <h3>where to watch:</h3>
                {providers.length > 0 ? (
                    <ul>
                        {providers.map(provider => (
                            <li key={provider.provider_id}>
                                <img className="streamingImg" src={`https://image.tmdb.org/t/p/w200${provider.logo_path}`} alt={provider.provider_name} />
                                <p>{provider.provider_name}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Not available for streaming.</p>
                )}
                <p className="description_About">{movie.overview}</p>
            </div>
        </div>
    );
}

export default AboutMoviePage;