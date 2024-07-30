import { randomUUID as uuidV4 } from "node:crypto";

export class Book {
  private constructor(
    public readonly id: string,
    private readonly props: BookProps
  ) {}

  static create(params: BookCreateParams) {
    return new Book(uuidV4(), params);
  }

  get title() {
    return this.props.title;
  }

  set title(title: string) {
    this.props.title = title;
  }

  get description() {
    return this.props.description;
  }

  set description(description: string) {
    this.props.description = description;
  }

  get author() {
    return this.props.author;
  }

  set author(author: string) {
    this.props.author = author;
  }
}

export type BookProps = {
  title: string;
  description: string;
  author: string;
};

export type BookCreateParams = BookProps;
