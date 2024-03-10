import { Routes, Route } from 'react-router-dom';
import BooksList from './components/BooksList';
import BookDetail from './components/BookDetails';


// App component is the root component of the application

function App() {
  return (
    <Routes>
      <Route path="/" element={<BooksList />} />
      <Route path="/books/:bookId" element={<BookDetail />} />
    </Routes>
  );
}

export default App;