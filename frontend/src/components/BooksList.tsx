import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles.css";
import { Book } from '../types';
import { ENTRYPOINT } from '../config/entrypoint';


const BooksList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState('');


const fetchBooks = async () => {
  try {
    const response = await fetch(`${ENTRYPOINT}/books`);
    if (response.ok)
    {
      const data = await response.json();
      const booksWithAuthors: Book[] = await Promise.all(
        data['hydra:member'].map(async (book: Book) => 
        {
          let authorName = "Unknown Author";
          if (book.author) {
            const authorId = book.author?.match(/\d+$/)?.[0];
            try {
              const authorResponse = await fetch(`${ENTRYPOINT}/authors/${authorId}`);
              if (authorResponse.ok) {
                const authorData = await authorResponse.json();
                authorName = `${authorData.firstName} ${authorData.lastName}`;
              }
            } catch (error) {
              console.error("Failed to fetch author details", error);
            }
          }
          return { ...book, authorName };
        })
      );
      setBooks(booksWithAuthors);
    } else {
      console.error("Failed to fetch books:", response.statusText);
    }
  } catch (error) {
    console.error("Failed to fetch books:", error);
  }
};


  useEffect(() => {
    fetchBooks();
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-6">Books List</h1>
      <div className="relative">
        <input
          type="text"
          className="w-48 sm:w-full p-4 pr-12 mb-6 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search books by title..."
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.length > 0 ? filteredBooks.map(book => (
          <div key={book.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition duration-150 ease-in-out">
            <h5 className="text-xl font-medium mb-2">{book.title}</h5>
            <p className="text-gray-700 mb-3">Genre: {book.genre}</p>
            <p className="text-gray-700 mb-3">Author: {book.authorName}</p>
            <Link to={`/books/${book.id}`} className="text-blue-500 hover:text-blue-800">See this Book</Link>
          </div>
        )) : <p>No books found.</p>}
      </div>
    </div>
  );
};

export default BooksList;
