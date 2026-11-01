'use client';

import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
export default function SearchInput({ placeholder = "Search Products", onSearch }) {    
    const [searchQuery, setSearchQuery] = useState('');
    
    const handleSearch = () => {
        if (onSearch) {
        onSearch(searchQuery);
        }
    };
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
        e.preventDefault();
        handleSearch();
        }
    };
    
    return (
        <div className="w-full mx-auto">
        <div className="relative">
            <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="w-full py-2 px-4 border-2 border-blue-300 rounded-md focus:outline-none focus:border-blue-400 text-gray-500 placeholder-gray-400"
            aria-label="Search"
            />
            <button 
            onClick={handleSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-500 focus:outline-none"
            aria-label="Submit search"
            >
            <IoSearchOutline></IoSearchOutline>
            </button>
        </div>
        </div>
    );
    }