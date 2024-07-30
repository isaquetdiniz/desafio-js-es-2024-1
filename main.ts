import { Library } from "./library";
import { Book } from "./book";

const books = [
  Book.create({
    author: "Isaque",
    description: "Livro bom",
    title: "Historia top",
  }),
  Book.create({
    author: "Isaque 2",
    description: "Livro bom 2",
    title: "Historia top 2",
  }),
];

const library = Library.create({
  books,
});

console.log("Library", library);
console.log("Books", books);

console.log("getBooks", library.getBooks());

const newBook = Book.create({
  author: "Isaque 3",
  description: "Livro bom 3",
  title: "Historia top 3",
});
console.log("addBook", library.addBook(newBook));

console.log("getBooks", library.getBooks());

console.log("getBookById", library.getBookById(newBook.id));

console.log(
  "updateBookById",
  library.updateBookById(newBook.id, { title: "Historia top demais" })
);
console.log("getBooks", library.getBooks());

console.log("removeBookById", library.removeBookById(newBook.id));
console.log("getBooks", library.getBooks());
