let x;
const library = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    status: { own: true, reading: false, read: false },
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    status: { own: true, reading: false, read: false },
  },
  {
    title: "1984",
    author: "George Orwell",
    status: { own: true, reading: false, read: false },
  },
];

library.forEach((book) => {
  book.status.read = true;
});
const [{ title: firstBook }] = library;
const libraryJSON = JSON.stringify(library);
console.log(library);
console.log(libraryJSON);
