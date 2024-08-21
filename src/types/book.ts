export interface Book {
  bookId: string;
  key: string;
  author_name: string[];
  cover_edition_key: string;
  first_sentence: string[];
  format: string[];
  isbn: string[];
  first_publish_year: number;
  title: string;
  cover?: string;
  isLiked: boolean;
  isShown: boolean;
}
