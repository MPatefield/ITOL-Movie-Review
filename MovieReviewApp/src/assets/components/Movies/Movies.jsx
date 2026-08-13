import React, { useState } from 'react'
import './Movies.css'
import WatchMovies from './WatchMovies'
import { useEffect } from 'react'
import FilterMovies from './FilterMovies'


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
                    <FilterMovies handleFilter={handleFilter} selectRating={selectRating} ratings={[5,6,7,8,9,10]}/>
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