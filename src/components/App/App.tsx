import './App.scss';

// React
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Redux
import { setBooksList } from '../../slices/booksSlice.ts';
import { useDispatch } from 'react-redux';

// Components
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import FilterBox from '../FilterBox/FilterBox.tsx';
import CardsList from '../CardsList/CardsList.tsx';
import BookPage from '../BookPage/BookPage';

// Utils
import { api } from '../../utils/api.ts';
import { getBookId } from '../../utils/getBookId.ts';

// Types
import type { Book } from '../../types/book.ts';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .getBooks()
      .then((result: any) => {
        const books = result.docs;

        books.forEach((book: Book) => {
          book.bookId = getBookId(book.key);

          book.cover = book.cover_edition_key
            ? `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`
            : './no-cover.jpg';

          book.isLiked = false;
          book.isShown = true;
        });

        dispatch(setBooksList(books));
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route
            index
            element={
              <>
                <FilterBox />
                <CardsList />
              </>
            }
          />
          <Route path=":cardId" element={<BookPage />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}
