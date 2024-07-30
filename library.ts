import { randomUUID as uuidV4 } from "node:crypto";
import { Book, BookCreateParams } from "./book";

export class Library {
  private constructor(
    public readonly id: string,
    private readonly props: LibraryProps
  ) {}

  static create(params: LibraryCreateParams) {
    return new Library(uuidV4(), params);
  }

  get books() {
    return this.props.books;
  }

  set books(books: LibraryProps["books"]) {
    this.props.books = books;
  }

  addBook(book: Book) {
    this.books.push(book);

    return book;
  }

  getBooks() {
    return this.books;
  }

  removeBookById(id: string) {
    const book = this.getBookById(id);

    if (!book) {
      throw new Error(`Book ${id} not found`);
    }

    const newBooks = this.books.filter((book) => book.id != id);

    this.books = newBooks;
  }

  getBookById(id: string) {
    return this.books.find((book) => book.id === id);
  }

  updateBookById(id: string, bookProps: Partial<BookCreateParams>) {
    const book = this.getBookById(id);

    if (!book) {
      throw new Error(`Book ${id} not found`);
    }

    book.title = bookProps.title ?? book.title;
    book.author = bookProps.author ?? book.author;
    book.description = bookProps.description ?? book.description;

    return book;
  }
}

export type LibraryProps = {
  books: Book[];
};

export type LibraryCreateParams = LibraryProps;
