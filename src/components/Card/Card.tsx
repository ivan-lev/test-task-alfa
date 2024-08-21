import './Card.scss';

// React
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { likeBook, setBookToDisplay, deleteBook } from '../../slices/booksSlice';
import { useDispatch } from 'react-redux';

// Types
import type { Book } from '../../types/book';

export default function Card({ book }: { book: Book }): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const { bookId, cover, title, isLiked } = book;

  return (
    <div className="card">
      <Link to={bookId} onClick={() => dispatch(setBookToDisplay(bookId))}>
        <img className="card__image" src={cover} alt={`Обложка к ${title}`}></img>
      </Link>
      <Link className="card__link" to={bookId} onClick={() => dispatch(setBookToDisplay(bookId))}>
        {title}
      </Link>
      <div
        className={`card__like card__like_${isLiked ? (!isHovered ? 'liked' : 'broken') : 'empty'}`}
        onClick={() => dispatch(likeBook(bookId))}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <div className="card__delete" onClick={() => dispatch(deleteBook(bookId))}></div>
    </div>
  );
}
