import React from 'react'
import '../headerFooter.css'

const Header = () => {

    return (
        <header>
            <nav>
                <h1 className="logo">Movie.Review</h1>
                <div className="header-links">
                    <a href="#">Top Rated</a>
                    <a> | </a>
                    <a href="#">Recent Releases</a>
                    <a> | </a>
                    <a href="#">On Fire!</a>
                </div>
            </nav>
        </header>
    )
}

export default Header