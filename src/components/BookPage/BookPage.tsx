import './BookPage.scss';

// React
import { Link } from 'react-router-dom';

// Redux
import { RootState } from '../../slices';
import { useSelector } from 'react-redux';

// types
import { Book } from '../../types/book';

export default function BookPage() {
  const book: Book = useSelector((state: RootState) => state.books.bookToDisplay);
  return (
    <section className="book-page">
      <Link className="book-page__navigation" to="..">
        Назад
      </Link>
      <img className="book-page__img" src={book.cover}></img>
      <div className="book-page__content">
        <span>{book.author_name}</span>
        <span>{book.title}</span>
        <span>{book.first_publish_year}</span>
        <span>{book.first_sentence}</span>
      </div>
    </section>
  );
}
