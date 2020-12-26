import React from 'react';
import './SearchIcon.css'

function SearchIcon() {
    return (
        <div className="searchButton">
        <button>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.5 22.5C6.97715 22.5 2.5 18.0228 2.5 12.5C2.5 6.97715 6.97715 2.5 12.5 2.5C18.0228 2.5 22.5 6.97715 22.5 12.5C22.5 14.8109 21.7162 16.9387 20.3998 18.632L27.1339 25.3661L25.3661 27.1339L18.6321 20.3998C16.9387 21.7161 14.8109 22.5 12.5 22.5ZM20 12.5C20 16.6421 16.6421 20 12.5 20C8.35786 20 5 16.6421 5 12.5C5 8.35786 8.35786 5 12.5 5C16.6421 5 20 8.35786 20 12.5Z" fill="black" />
            </svg>
        </button>
        </div>
    );
}

export default SearchIcon;