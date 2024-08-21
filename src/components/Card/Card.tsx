import './Card.scss';

// React
import { Link } from 'react-router-dom';

// Redux
import { likeBook, setBookToDisplay } from '../../slices/booksSlice';
import { useDispatch } from 'react-redux';

// Types
import type { Book } from '../../types/book';

export default function Card({ book }: { book: Book }): JSX.Element {
  const dispatch = useDispatch();

  const { bookId, cover, title, isLiked } = book;

  return (
    <div className="card">
      <Link to={bookId} onClick={() => dispatch(setBookToDisplay(bookId))}>
        <img className="card__image" src={cover} alt={`Обложка к ${title}`}></img>
      </Link>
      <Link to={bookId} onClick={() => dispatch(setBookToDisplay(bookId))}>
        {title}
      </Link>
      <img
        src={`./icons/heart-${isLiked ? 'filled' : 'empty'}.svg`}
        alt=""
        className="card__like"
        onClick={() => dispatch(likeBook(bookId))}
      />
    </div>
  );
}
