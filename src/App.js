import React, { useState, useEffect } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Search from './Search';
import Shelf from './Shelf';
import { Route, Link } from 'react-router-dom';

const BooksApp = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll()
    .then((res) => {setBooks(res)})
  },[]);

  const onUpdateShelf = (updatedBook, shelf) => {

    updatedBook.shelf = shelf;

    BooksAPI.update(updatedBook, shelf)
    .then(() => {
      setBooks(books.filter(b => b.id !== updatedBook.id).concat([updatedBook]))
    })
  }

  return (
    <div className="app">
      <Route path='/search' render={() => (
        <Search
        updateShelf={onUpdateShelf}
        booksOnShelf={books}
        />
      )} />
      <Route exact path='/' render={() => (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
            title="Want to Read"
            books={books.filter(book => book.shelf === "wantToRead")}
            updateShelf={onUpdateShelf}
            />
            <Shelf
            title="Currently Reading"
            books={books.filter(book => book.shelf === "currentlyReading")}
            updateShelf={onUpdateShelf}
            />
            <Shelf
            title="Read"
            books={books.filter(book => book.shelf === "read")}
            updateShelf={onUpdateShelf}
            />
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