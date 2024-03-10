import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookDetails from '../components/BookDetails';

// Mocking the necessary modules and global fetch
vi.mock('react-router-dom', async () => {
  const actualModule = await vi.importActual('react-router-dom');
  return {
    ...actualModule,
    useParams: vi.fn(() => ({ bookId: '1' })),
  };
});

vi.mock('../config/entrypoint', () => ({
  ENTRYPOINT: 'https://fakeapi.com',
}));

describe('BookDetails', () => {
  beforeEach(() => {
    global.fetch = vi.fn((url) =>
      Promise.resolve({
        json: () => Promise.resolve(
          url.includes('/books/1') ? {
            title: 'Mock Book',
            genre: 'Mock Genre',
            description: 'Mock Description',
            author: '1',
          } : {
            firstName: 'John',
            lastName: 'Doe',
          }
        ),
      })
    );
  });

  it('displays book and author details after fetching', async () => {
    render(<MemoryRouter><BookDetails /></MemoryRouter>);
    await waitFor(() => expect(screen.getByText('Mock Book')).toBeInTheDocument());
    expect(screen.getByText('Genre : Mock Genre')).toBeInTheDocument();
    expect(screen.getByText('Author: John Doe')).toBeInTheDocument();
    expect(screen.getByText('Description: Mock Description')).toBeInTheDocument();
  });


  it('displays a loading state before details are fetched', async () => {
    render(
      <MemoryRouter>
        <BookDetails />
      </MemoryRouter>
    );
  
    // Check for loading text if details are not fetched
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  
    // Wait for loading to finish and check for book title to ensure loading has completed and details are displayed
    await waitFor(() => expect(screen.getByText('Mock Book')).toBeInTheDocument());
  });
  
  it('displays an error message if fetching details fails', async () => {
    global.fetch = vi.fn(() => Promise.reject('Network error'));
  
    render(
      <MemoryRouter>
        <BookDetails />
      </MemoryRouter>
    );
  
    await waitFor(() => expect(screen.getByText(/error/i)).toBeInTheDocument());
  });

  it('displays the full name of the author', async () => {
    render(
      <MemoryRouter>
        <BookDetails />
      </MemoryRouter>
    );
  
    // Wait for the author details to be fetched and displayed on the screen
    await waitFor(() => expect(screen.getByText('Author: John Doe')).toBeInTheDocument());
  });
  
  
  it('handles incomplete book data gracefully', async () => {
    // Mock fetch to return incomplete book data (missing genre)
    global.fetch = vi.fn((url) =>
      Promise.resolve({
        json: () => Promise.resolve({
          // Assuming 'genre' is missing
          title: 'Mock Book',
          description: 'Mock Description',
          author: '1',
        }),
      })
    );
  
    render(
      <MemoryRouter>
        <BookDetails />
      </MemoryRouter>
    );
  
    await waitFor(() => expect(screen.getByText('Mock Book')).toBeInTheDocument());
    expect(screen.queryByText('Genre :')).not.toBeInTheDocument();
    expect(screen.getByText(/Mock Description/)).toBeInTheDocument();
  });

  it('handles incomplete book data gracefully', async () => {
    // Mock fetch to return incomplete book data
    global.fetch = vi.fn((url) =>
      Promise.resolve({
        json: () => Promise.resolve({
          // Assuming 'genre' is missing
          title: 'Mock Book',
          description: 'Mock Description',
          author: '1',
        }),
      })
    );
  
    render(
      <MemoryRouter>
        <BookDetails />
      </MemoryRouter>
    );
  
    await waitFor(() => expect(screen.getByText('Mock Book')).toBeInTheDocument());
    expect(screen.queryByText('Genre :')).not.toBeInTheDocument();
    expect(screen.getByText(/Mock Description/)).toBeInTheDocument();
  });

  it('constructs fetch URL correctly for book and author details', async () => {
    render(
      <MemoryRouter>
        <BookDetails />
      </MemoryRouter>
    );
  
    await waitFor(() => expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('/books/1')));
    await waitFor(() => expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('/authors/')));
  });
  

});
