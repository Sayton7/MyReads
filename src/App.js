import React, { useState, useEffect } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Search from './Search';
import Shelf from './Shelf';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BooksApp = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll()
    .then((books) => {setBooks(books)})
  });

  return (
    <div className="app">
      <Route path='/search' render={() => (
        <Search />
      )} />
      <Route exact path='/' render={() => (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf />
          </div>
        </div>
        <div className="open-search">
          <Link className="open-search-link" to='/search'>Add a book</Link>
        </div>
      </div>
      )} />
    </div>
  )
}

export default BooksApp