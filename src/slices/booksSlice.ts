import { createSlice } from '@reduxjs/toolkit';

import { Book } from '../types/book';

interface Books {
  bookToDisplay: Book;
  booksList: Book[];
}

const initialState: Books = {
  bookToDisplay: {
    key: '',
    author_name: [''],
    cover_edition_key: '',
    first_sentence: [''],
    format: [''],
    isbn: [''],
    first_publish_year: 0,
    title: '',
    isLiked: false
  },
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
        book.key !== action.payload ? book : { ...book, isLiked: !book.isLiked }
      );
    }
  }
});

export const { setBooksList, likeBook } = booksSlice.actions;

export default booksSlice.reducer;
