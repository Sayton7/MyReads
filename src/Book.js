import React from "react";
import propTypes from 'prop-types';

const Book = props => {
    return (
        <li>
            <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:(props.book.imageLinks && props.book.imageLinks.smallThumbnail ? `url("${props.book.imageLinks.smallThumbnail}")` : "none")  }}></div>
                    <div className="book-shelf-changer">
                      <select
                      value={props.book.shelf ? props.book.shelf : "none"}
                      onChange={e => props.updateShelf(props.book, e.target.value)}
                      >
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{props.book.title}</div>
                  <div className="book-authors">{(props.book.authors && props.book.authors > 1 ?
                    props.book.authors.join(", ") : props.book.authors)}</div>
            </div>
        </li>
    )
}

Book.propTypes = {
  book: propTypes.object.isRequired,
  updateShelf: propTypes.func.isRequired,
}

export default Book;