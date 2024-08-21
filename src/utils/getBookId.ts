export const getBookId = (bookLink: string): string => {
  const splittedLink = bookLink.split('/');
  return splittedLink[splittedLink.length - 1];
};
