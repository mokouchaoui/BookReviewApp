
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


## Running Tests



### Frontend Testing (React with Vite)

The frontend of the BookReview project utilizes **React Testing Library** and **Vitest** to ensure the user interface works as expected and to maintain code quality.

#### Prerequisites for Frontend Testing
- Ensure Node.js and npm are installed, as they are necessary for managing dependencies and running the tests.
- The project's npm dependencies should be installed. If you haven't done so, run `npm install` in the frontend directory.

#### Executing Frontend Tests
1. **Navigate to the frontend directory**:
    ```
    cd frontend
    ```
2. **Run the tests** using the command:
    ```
    npm test
    ```
    This command executes all tests located in the `tests` directory within the frontend project. It runs the test suite using Vitest and displays the results, indicating any tests that have succeeded or failed.


The BookReview project uses PHPUnit for testing to ensure code quality and functionality. Follow the steps below to execute the tests.

### Prerequisites

- PHPUnit is set up and configured in the project. Ensure you have PHPUnit installed either globally or as part of your project dependencies.
- The database used for testing should be configured and ready. You may need to set up a separate test database to avoid impacting your development data.

### Running PHPUnit Tests

1. **Navigate to the Backend Directory**

   Ensure you're in the backend directory where the Symfony project and the `phpunit.xml.dist` configuration file are located.

   ```bash
   cd backend
   ```

2. **Execute Tests**

   Run PHPUnit to execute all tests. If PHPUnit is installed as a project dependency, use the following command:

   ```bash
   ./vendor/bin/phpunit
   ```

   If PHPUnit is installed globally, you might run:

   ```bash
   phpunit
   ```

   This command will execute all tests found in the `tests` directory and output the results, indicating any successes or failures.


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
