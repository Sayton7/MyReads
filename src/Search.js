import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from "./Book";

const Search = props => {

  const [searchedBooks, setSearchedBooks] = useState([]);
  const [query, setQuery] =useState('');

  useEffect(() => {
    if (query !== '') {
      BooksAPI.search(query)
      .then((searchedBooks) => {setSearchedBooks(searchedBooks)})
    } else {
      setSearchedBooks('')
    }
  }, [query]);

  return (
      <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to='/'>Close</Link>
            <div className="search-books-input-wrapper">
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
              <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={e => setQuery(e.target.value)}
              />
  
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
            {searchedBooks && searchedBooks.length > 1 &&
            searchedBooks.map(book => (
              <Book
              key={book.id}
              book={book}
              /> 
            ))}
            </ol>
          </div>
        </div>
  )
}

export default Search;