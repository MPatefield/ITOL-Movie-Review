import React, { useState } from 'react'
import './Movies.css'
import WatchMovies from './WatchMovies'
import { useEffect } from 'react'


const Movies = () => {

    const [movies,setMovies] = useState([])

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

    return (
        <section className="movie-list">
            <header className="movie-header">
                <h2 className="center-ele movie-h2">Popular</h2>
                <div className="center-ele movie-list">
                    <ul className="center-ele movie-filter">
                        <li className="movie-filter-item">8+</li>
                        <li className="movie-filter-item">9+</li>
                        <li className="movie-filter-item">10</li>
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
                {movies.map((movie) => (
                    <WatchMovies key={movie.id} movie={movie}/>))} 
            </div>

        </section>
    )
}

export default Movies