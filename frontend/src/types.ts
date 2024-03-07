export interface Book {
    id: number;
    title: string;
    genre: string;
    description: string;
    author?: string;
    authorName?: string;
}
  
  export interface Author {
    firstName: string;
    lastName: string;
    books: Book[];
  }

