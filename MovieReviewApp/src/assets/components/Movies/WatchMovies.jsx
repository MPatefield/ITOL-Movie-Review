import React from 'react'
import './WatchMovies.css'
import PropTypes from 'prop-types'


const WatchMovies = ({movie}) => {

    return (
        <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" className="movie-show">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="movie-img" alt={movie.original_title} />
            <div className="movie_details">
                <h3 className="movie-title">{movie.original_title}</h3>
                <div className="movie-date">
                    <p>{movie.release_date}</p>
                    <p>{movie.vote_average}</p>
                </div>
                <p className="moviedesc">{movie.overview.slice(0,100) + "..."}</p>
            </div>
        </a>

    )
}

WatchMovies.propTypes={
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path:PropTypes.string,
        original_title: PropTypes.string.isRequired,
        release_date:PropTypes.string,
        vote_average:PropTypes.number,
        overview:PropTypes.string,
    }).isRequired
}

export default WatchMovies