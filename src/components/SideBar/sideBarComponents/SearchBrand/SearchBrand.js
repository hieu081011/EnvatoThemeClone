import React from "react";
import './style.scss'
import { FaExternalLinkAlt, FaSearch } from 'react-icons/fa'
const SearchBrand = () => {
    return (
        <>
            <div className="search-brand-container">
                <div className="search-brand-header">
                    <h2>Search Brands</h2>
                    <a><FaExternalLinkAlt /></a>
                </div>
                <div className="search-brand-content">
                    <div className="input-wrapper">
                        <span><FaSearch /></span>
                        <input type='text' placeholder="Type brand here" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchBrand

