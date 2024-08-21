import './Card.scss';

import type { Book } from '../../types/book';

import { likeBook } from '../../slices/booksSlice';
import { useDispatch } from 'react-redux';

export default function Card({ book }: { book: Book }): JSX.Element {
  const dispatch = useDispatch();

  const { key, cover, title, isLiked } = book;
  const bookLink = key.split('/').pop();

  return (
    <div className="card">
      <a href={bookLink}>
        <img className="card__image" src={cover} alt={`Обложка к ${title}`}></img>
      </a>
      <a href={bookLink}>{title}</a>
      <img
        src={`./icons/heart-${isLiked ? 'filled' : 'empty'}.svg`}
        alt=""
        className="card__like"
        onClick={() => dispatch(likeBook(key))}
      />
    </div>
  );
}
