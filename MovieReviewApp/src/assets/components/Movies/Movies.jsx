import React, { useState } from 'react'
import './Movies.css'
import WatchMovies from './WatchMovies'
import { useEffect } from 'react'


const Movies = () => {

    const [movies, setMovies] = useState([])
    const [selectRating, setSelectRating] = useState(0)

    const apiKey = import.meta.env.VITE_API_KEY;

    const fetchMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
        const data = await response.json()
        console.log(data)
        setMovies(data.results)
    };

    useEffect(() => {
        fetchMovies();
    }, [])

    const handleFilter = (rating) => {
        if (rating === selectRating) {
            setSelectRating(0);
        } else {
            setSelectRating(rating);
        }
    };

    const displayedMovies = selectRating === 0
        ? movies
        : movies.filter((movie) => movie.vote_average >= selectRating);

    return (
        <section className="movie-list">
            <header className="movie-header">
                <h2 className="center-ele movie-h2">Popular</h2>
                <div className="center-ele movie-list">
                    <ul className="center-ele movie-filter">
                        <li className={selectRating === 6 ? "movie-filter-item active" : "movie-filter-item"} onClick={() => handleFilter(6)}>6+</li>
                        <li className={selectRating === 7 ? "movie-filter-item active" : "movie-filter-item"} onClick={() => handleFilter(7)}>7+</li>
                        <li className={selectRating === 8 ? "movie-filter-item active" : "movie-filter-item"} onClick={() => handleFilter(8)}>8+</li>
                    </ul>
                    <select name="" id="" className="movie-sorting">
                        <option value="">Sort by</option>
                        <option value="date">Date</option>
                        <option value="rating">Rating</option>
                    </select>
                    <select name="" id="" className="movie-sorting">
                        <option value="">Ascending</option>
                        <option value="">Descending</option>
                    </select>
                </div>
            </header>

            <div className="movies-shows">
                {displayedMovies.map((movie) => (
                    <WatchMovies key={movie.id} movie={movie} />
                ))}
            </div>

        </section>
    )
}

export default Movies