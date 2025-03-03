import React, { useState, useEffect } from "react";
import Card from './Card';
import tempIMG from './img/SeverenceTMP.PNG'
import Banner from './img/DarkNightBanner.jpg';
import './MainPage.css';
import { 
    fetchPopularMovies,
    fetchRecentMovies,
    fetchActionMovies,
    fetchComedyMovies,
    fetchUpcomingMovies,
    getRandomMovieImage
 } from './APICalls.js';


function MainPage(){

    const [banner, setBanner] = useState(null);
    const [popularMovies, setPopularMovies] = useState([]);
    const [recentMovies, setRecentMovies] = useState([]);
    const [actionMovies, setActionMovies] = useState([]);
    const [comedyMovies, setComedyMovies] = useState([]);
    const [upcomingMovies, setComingMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setPopularMovies(await fetchPopularMovies());
                setRecentMovies(await fetchRecentMovies());
                setActionMovies(await fetchActionMovies());
                setComedyMovies(await fetchComedyMovies());
                setComingMovies(await fetchUpcomingMovies());
                const bannerData = await getRandomMovieImage();
                setBanner(bannerData);
            }
            catch (error){
                console.log("Error fetching movies", error);
            }
        }
        fetchMovies();
    }, []);

    // Reusable components for movie rows
    const MovieRow = ({title, movies}) => {
        return (
            <div className="MovieRow">
            <h1>{title}</h1>
            <div className="column"> 
                {movies.length > 0 ? (
                    movies.map(movie => (
                        <Card 
                        key={movie.id} 
                        img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        title={movie.title}
                        description={movie.overview}>
                        </Card>
                    ))
                ): (
                    <p>Loading...</p>
                )}
            </div>

        </div>
        )
    }

    return (
        <div>
            <header className="App-header">
                {banner ? (
                    <>
                        <img className="banner-img" src={banner.imageUrl} alt={banner.title} />
                        <div className="Banner-Title">
                            <h2>{banner.title}</h2>
                            <h3>{banner.categories}</h3>
                            <h2 className="description">{banner.description}</h2>
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </header>

            <MovieRow title="Popular Movies" movies={popularMovies} />
            <MovieRow title="Recently Released" movies={recentMovies} />
            <MovieRow title="Action Movies" movies={actionMovies} />
            <MovieRow title="Comedy Movies" movies={comedyMovies} />
            <MovieRow title="Upcoming" movies={upcomingMovies} />
        </div>
    );
}

export default MainPage