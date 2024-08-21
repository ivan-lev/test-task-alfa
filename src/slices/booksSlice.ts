import { createSlice } from '@reduxjs/toolkit';

import { Book } from '../types/book';

interface Books {
  bookToDisplay: Book;
  booksList: Book[];
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
  isLiked: false
};

const initialState: Books = {
  bookToDisplay: emptyBook,
  booksList: []
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooksList: (state, action) => {
      state.booksList = action.payload;
    },

    likeBook: (state, action) => {
      state.booksList = state.booksList.map(book =>
        book.bookId !== action.payload ? book : { ...book, isLiked: !book.isLiked }
      );
    },

    setBookToDisplay: (state, action) => {
      const book = state.booksList.find(book => book.bookId === action.payload);
      state.bookToDisplay = book || emptyBook;
    },

    deleteBook: (state, action) => {
      const filteredList = state.booksList.filter(book => book.bookId !== action.payload);
      state.booksList = filteredList;
    }
  }
});

export const { setBooksList, likeBook, setBookToDisplay, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
