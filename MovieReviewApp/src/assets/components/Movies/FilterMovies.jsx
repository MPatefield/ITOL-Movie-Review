import React from 'react'

const FilterMovies = (props) => {
    const rating = props.ratings


    return (
        <div>
            <ul className="center-ele movie-filter">
                {
                    rating.map(ratingGiven => <li key={ratingGiven} className={props.selectRating === ratingGiven ? "movie-filter-item active" : "movie-filter-item"} onClick={() => props.handleFilter(ratingGiven)}>{ratingGiven}</li>)
                }
            </ul>
        </div>
    )
}

export default FilterMovies