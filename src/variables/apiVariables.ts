const BASE_URL = 'https://openlibrary.org/search.json?q=the+lord+of+the+rings';
const HEADERS = new Headers({
  'User-Agent': 'Alpha test task (fanatos@mail.ru)'
});
const OPTIONS = {
  method: 'GET',
  headers: HEADERS
};

const _fields = [
  'author_name',
  'first_sentence',
  'format',
  'cover_edition_key',
  'first_publish_year',
  'title',
  'key'
];

const FIELDS = _fields.join(',');

export { BASE_URL, OPTIONS, FIELDS };
