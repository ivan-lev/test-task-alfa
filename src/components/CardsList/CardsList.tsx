import './CardsList.scss';

// React
import { useSelector } from 'react-redux';

import Card from '../Card/Card';

import type { Book } from '../../types/book';

// Redux
import { RootState } from '../../slices';

export default function CardsList(): JSX.Element {
  const booksList = useSelector((state: RootState) => state.books.booksList);
  return (
    <div className="cards-list">
      {booksList
        .filter(book => book.isShown)
        .map((book: Book) => (
          <Card key={book.key} book={book} />
        ))}
    </div>
  );
}
