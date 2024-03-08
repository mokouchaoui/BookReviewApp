<?php

namespace App\Tests\Entity;

use App\Entity\Book;
use App\Entity\Author;
use App\Entity\Review;
use PHPUnit\Framework\TestCase;

class BookTest extends TestCase
{
    public function testBookIdGetter()
    {
        $book = new Book();
        $this->assertNull($book->getId());
    }

    public function testBookTitleSetterAndGetter()
    {
        $book = new Book();
        $book->title = 'Test Book';
        $this->assertSame('Test Book', $book->title);
    }

    public function testBookDescriptionSetterAndGetter()
    {
        $book = new Book();
        $book->description = 'Test Description';
        $this->assertSame('Test Description', $book->description);
    }

    public function testBookGenreSetterAndGetter()
    {
        $book = new Book();
        $book->genre = 'Fiction';
        $this->assertSame('Fiction', $book->genre);
    }

    public function testBookPublicationDateSetterAndGetter()
    {
        $book = new Book();
        $book->publicationDate = new \DateTimeImmutable('2021-01-01');
        $this->assertEquals(new \DateTimeImmutable('2021-01-01'), $book->publicationDate);
    }

    public function testBookAuthorSetterAndGetter()
    {
        $book = new Book();
        $author = new Author();
        $book->author = $author;
        $this->assertSame($author, $book->author);
    }

    public function testBookReviewsSetterAndGetter()
    {
        $book = new Book();
        $review = new Review();
        $book->reviews = [$review];
        $this->assertSame([$review], $book->reviews);
    }

    public function testBookTitleCannotBeEmpty()
{
    $this->expectException(\InvalidArgumentException::class);
    $book = new Book();
    $book->setTitle('');
}

public function testBookDescriptionCannotBeEmpty()
{
    $this->expectException(\InvalidArgumentException::class);
    $book = new Book();
    $book->setDescription('');
}

public function testBookGenreCannotBeEmpty()
{
    $this->expectException(\InvalidArgumentException::class);
    $book = new Book();
    $book->setGenre('');
}

public function testBookPublicationDateCannotBeFuture()
{
    $this->expectException(\InvalidArgumentException::class);
    $book = new Book();
    $book->setPublicationDate(new \DateTimeImmutable('3000-01-01'));
}

}