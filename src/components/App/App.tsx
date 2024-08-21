import './App.scss';

// React hooks
import { useEffect } from 'react';

// Redux
import { setBooksList } from '../../slices/booksSlice.ts';
import { useDispatch } from 'react-redux';

// Components
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

// Utils
import { api } from '../../utils/api.ts';

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
          const bookCover = book.cover_edition_key;

          book.cover = book.cover_edition_key
            ? `https://covers.openlibrary.org/b/olid/${bookCover}-L.jpg`
            : './no-cover.jpg';

          book.isLiked = false;
        });

        dispatch(setBooksList(result.docs));
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
