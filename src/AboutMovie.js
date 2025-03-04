import { useLocation } from "react-router-dom";
import { WhereToWatch } from "./APICalls";
import './AboutMovie.css';
import { useEffect, useState } from "react";

function AboutMoviePage(){
    const location = useLocation();
    const movie = location.state?.movie;

    const [providers, setProviders] = useState([]);

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

    if(!movie) {
        return <p>No movie data found.</p>
    }

    return (
        <div>
            <div className="AboutPge">
                <h1>{movie.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
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