import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ENTRYPOINT } from '../config/entrypoint';

interface Book {
  title: string;
  genre?: string;
  description: string;
  author: string;
}

interface Author {
  firstName: string;
  lastName: string;
}

const BookDetails: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [author, setAuthor] = useState<Author | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${ENTRYPOINT}/books/${bookId}`)
      .then(response => response.json())
      .then(data => {
        setBook(data);
        // Extracting author ID from the data
        const authorId = data.author.match(/\d+$/)[0];
        return fetch(`${ENTRYPOINT}/authors/${authorId}`);
      })
      .then(response => response.json())
      .then(authorData => setAuthor(authorData))
      .catch(error => {
        console.error("Failed to fetch book or author details", error);
        setError(true); // Setting error state
      });
  }, [bookId]);

  if (error) {
    // add the error based on the test case
    return <div>Error loading book details.</div>;
  }

  if (!book || !author) {
    return <div className="flex justify-center items-center h-screen"><div>Loading...</div></div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <div className="md:flex">
        <div className="p-8">
          {book.genre && (
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Genre : {book.genre}
            </div>
          )}
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{book.title}</h2>
          <p className="mt-2 text-gray-500">Author: {author.firstName} {author.lastName}</p>
          <p className="mt-2 text-gray-500">Description: {book.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
