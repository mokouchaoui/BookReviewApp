
# BookReview Project

## Introduction

The BookReview project is a full-stack application aimed at showcasing a book review system, with functionalities for managing books, authors, and reviews. This project combines the robustness of Symfony for the backend API and the React library for the frontend, using Vite for an enhanced development experience.

## Project Structure

The project is organized into two main directories:

- `frontend`: Contains the React application code, utilizing Vite as the build tool.
- `backend`: Houses the Symfony API code, responsible for handling CRUD operations and serving the data to the frontend.

## Getting Started

### Prerequisites

- PHP 7.4 or higher and Composer for setting up the Symfony backend.
- Node.js and npm for managing the React frontend dependencies.

### Backend Setup (Symfony)

1. **Navigate to the backend directory**:

```bash
cd backend
```

2. **Install Composer dependencies**:

```bash
composer install
```

3. **Start the Symfony development server**:

```bash
symfony server:start
```

4. **Configure the `.env` file** for database connections and other environment variables.

5. **Create the database and run migrations**:

```bash
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
```

### Frontend Setup (React with Vite)

1. **Navigate to the frontend directory**:

```bash
cd frontend
```

2. **Install npm dependencies**:

```bash
npm install
```

3. **Start the development server using Vite**:

```bash
npm run dev
```

This command starts the Vite development server, typically available at [http://localhost:3000](http://localhost:3000).

## Features

- **Books List Screen**: Displays a list of books, including titles, authors, and genres. Features a search functionality to filter books by title.
- **Book Detail Screen**: Provides detailed information about a book, such as the book title, author's name, genre, and description.

## Contributing

Contributions are welcome! Please adhere to the following guidelines:

- Fork the repository.
- Create a new branch for each feature or improvement.
- Submit a pull request with a detailed description of your changes.


## Acknowledgments

- Symfony for the backend framework.
- React and Vite for the frontend development.

Thank you for exploring the BookReview project. Your feedback and contributions are highly appreciated as we strive to improve this application.