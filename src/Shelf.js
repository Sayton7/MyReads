import React from "react";
import Book from "./Book";
import propTypes from 'prop-types';

const Shelf = props => {
    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {props.books.map(book => (
                <Book
                key={book.id}
                book={book}
                updateShelf={props.updateShelf}
                />
              ))}
            </ol>
          </div>
        </div>
    )
}

Shelf.propTypes = {
  title : propTypes.string.isRequired,
  books : propTypes.array.isRequired,
  updateShelf : propTypes.func.isRequired,
}

export default Shelf;