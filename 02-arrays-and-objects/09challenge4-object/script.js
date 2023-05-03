const library = [
  {
    title: "Ang Mga Kaibigan ni Aling Susan",
    author: "Bob Ong",
    status: { own: true, reading: false, read: false },
  },
  {
    title: "ABNKKBSNPLAko?!",
    author: "Bob Ong",
    status: { own: true, reading: false, read: false },
  },
  {
    title: "Stainless Longanisa",
    author: "Bob Ong",
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
