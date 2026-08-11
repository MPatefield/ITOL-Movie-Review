import React from 'react'
import './WatchMovies.css'
import moviePic from './odyssey.webp'


const WatchMovies = () => {

    return (
        <a href="" className="movie-show">
            <img src={moviePic} className="movie-img" alt="movie details" />
            <div className="movie_details">
                <h3 className="movie-title">The Odyssey</h3>
                <div className="movie-date">
                    <p>17/07/2026</p>
                    <p>10.0 {""}</p>
                </div>
                <p className="moviedesc">Action</p>
            </div>
        </a>

    )
}

export default WatchMovies