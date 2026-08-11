import React from 'react'
import './Movies.css'
import WatchMovies from './WatchMovies'

const Movies = () => {

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
                        <option value=""></option>
                    </select>
                </div>
            </header>

            <div className="movies-shows">
                <WatchMovies/>
            </div>

        </section>
    )
}

export default Movies