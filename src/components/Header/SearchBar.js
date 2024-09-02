import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [results, setResults] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchTerm.length > 2) {
      // Simulating API call for suggestions
      const fakeSuggestions = [
        `${searchTerm} shirt`,
        `${searchTerm} pants`,
        `${searchTerm} shoes`,
      ];
      setSuggestions(fakeSuggestions);

      // Simulating API call for search results
      const fakeResults = [
        { id: 1, title: `${searchTerm} T-Shirt`, price: '$19.99', image: 'https://source.unsplash.com/random/100x100?t-shirt' },
        { id: 2, title: `${searchTerm} Jeans`, price: '$49.99', image: 'https://source.unsplash.com/random/100x100?jeans' },
        { id: 3, title: `${searchTerm} Sneakers`, price: '$79.99', image: 'https://source.unsplash.com/random/100x100?sneakers' },
      ];
      setResults(fakeResults);
    } else {
      setSuggestions([]);
      setResults([]);
    }
  }, [searchTerm]);

  const handleSearchIconClick = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setSuggestions([]);
    setResults([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative" ref={searchRef}>
      <button
        onClick={handleSearchIconClick}
        className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Open search"
      >
        <FaSearch className="w-5 h-5" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-96 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out"
          >
            <div className="p-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Search for products..."
                  className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Search input"
                />
                {searchTerm && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                    aria-label="Clear search"
                  >
                    <FaTimes className="w-4 h-4" />
                  </button>
                )}
              </div>
              {suggestions.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
              {results.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Results:</h3>
                  <ul className="space-y-2">
                    {results.map((result) => (
                      <li
                        key={result.id}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md transition-colors duration-200"
                      >
                        <img src={result.image} alt={result.title} className="w-12 h-12 object-cover rounded-md mr-3" />
                        <div>
                          <p className="font-medium">{result.title}</p>
                          <p className="text-gray-500">{result.price}</p>
                        </div>
                        <button className="ml-auto bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition-colors duration-200">
                          <FaShoppingCart className="w-4 h-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;