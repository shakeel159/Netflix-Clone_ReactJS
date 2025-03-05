import React, { useEffect, useState } from "react";
import Card from './Card';
import tempIMG from './img/SeverenceTMP.PNG';
import {
    fetchMoviesByCategory,
    fetchPopularMovies
} from './APICalls.js';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './MainPage.css';

import './Categories.css';

function CategoriesPage(){
    const [selectedValue, setSelectedValue] = useState("");
    const [defualt, setDefualt] = useState([]);
    const [categories, setCategories] = useState([]);  // For storing the fetched data
    const [currentPage, setCurrentPage] = useState(1);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        setCurrentPage(1);
    };
    const tempTitle = "Severance";
    const Describtion = "A gripping mystery series.";

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                let fetchedMovies;
                if (selectedValue) {
                    fetchedMovies = await fetchMoviesByCategory(selectedValue, currentPage);
                } else {
                    fetchedMovies = await fetchPopularMovies(currentPage);
                }
                setCategories(fetchedMovies);
            } catch (error) {
                console.error("Error fetching movies", error);
            }
        };
        fetchMovies();
    }, [selectedValue, currentPage]); 

    const CategoryPage = ({movies}) => {
        return(
            <div className="CategoryRow">
                {movies.length > 0 ? (
                    movies.map(movie => (
                        <Card
                            key = {movie.id}
                            img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            title={movie.title}
                            description={movie.overview}
                            movieData={movie}
                            fullDescription={false}
                        >
                        </Card>
                    ))
                ): (
                    <p>Loading movies...</p>
                )}
            </div>
        )
    }

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className="page">
            <label htmlFor="options">Choose an option:</label>
            <div className="MovieRow">
                <select id="options" value={selectedValue} onChange={handleChange}>
                        <option value="">--Select Category--</option>
                        <option value="Action">Action</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Documentary">Documentary</option>
                </select>
                <p>{selectedValue || "Popular"}</p>
                    <div className="CategoryList">
                    {selectedValue ? <CategoryPage movies={categories} /> : <CategoryPage movies={defualt} />}
                    </div>
            </div>
            <div className="pageSelection">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    <FaArrowLeft size={24} />
                </button>
                <span>Page {currentPage}</span>
                <button onClick={handleNextPage}>
                    <FaArrowRight size={24} />
                </button>
            </div>
        </div>
    );
}

export default CategoriesPage;