import { createSlice } from '@reduxjs/toolkit';

import { Book } from '../types/book';

interface Books {
  booksList: Book[];
  bookToDisplay: Book;
}

const emptyBook = {
  bookId: '',
  key: '',
  author_name: [''],
  cover_edition_key: '',
  first_sentence: [''],
  format: [''],
  isbn: [''],
  first_publish_year: 0,
  title: '',
  isLiked: false,
  isShown: false
};

const initialState: Books = {
  booksList: [],
  bookToDisplay: emptyBook
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooksList: (state, action) => {
      state.booksList = action.payload;
    },

    showLikedBooks: state => {
      state.booksList.forEach(book => {
        if (!book.isLiked) {
          book.isShown = false;
        }
      });
    },

    showAllBooks: state => {
      state.booksList.forEach(book => {
        if (!book.isLiked) {
          book.isShown = true;
        }
      });
    },

    likeBook: (state, action) => {
      state.booksList = state.booksList.map(book =>
        book.bookId !== action.payload ? book : { ...book, isLiked: !book.isLiked }
      );
    },

    deleteBook: (state, action) => {
      const filteredList = state.booksList.filter(book => book.bookId !== action.payload);
      state.booksList = filteredList;
    },

    setBookToDisplay: (state, action) => {
      const book = state.booksList.find(book => book.bookId === action.payload);
      state.bookToDisplay = book || emptyBook;
    },

    resetBookToDisplay: state => {
      if (state.bookToDisplay.bookId !== '') {
        state.bookToDisplay = emptyBook;
      }
    }
  }
});

export const {
  setBooksList,
  showLikedBooks,
  showAllBooks,
  likeBook,
  deleteBook,
  setBookToDisplay,
  resetBookToDisplay
} = booksSlice.actions;

export default booksSlice.reducer;
