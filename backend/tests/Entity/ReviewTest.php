<?php

namespace App\Tests\Entity;

use App\Entity\Review;
use App\Entity\Book;
use PHPUnit\Framework\TestCase;

class ReviewTest extends TestCase
{
    public function testIdGetter()
    {
        $review = new Review();
        $this->assertNull($review->getId());
    }

    public function testFullNameSetterAndGetter()
    {
        $review = new Review();
        $review->fullName = 'Reviewer Name';
        $this->assertSame('Reviewer Name', $review->fullName);
    }

    public function testEmailSetterAndGetter()
    {
        $review = new Review();
        $review->email = 'reviewer@example.com';
        $this->assertSame('reviewer@example.com', $review->email);
    }

    public function testCommentSetterAndGetter()
    {
        $review = new Review();
        $review->comment = 'This is a test review.';
        $this->assertSame('This is a test review.', $review->comment);
    }

    public function testCreationDateSetterAndGetter()
    {
        $review = new Review();
        $review->creationDate = new \DateTimeImmutable('2021-01-01');
        $this->assertEquals(new \DateTimeImmutable('2021-01-01'), $review->creationDate);
    }

    public function testBookSetterAndGetter()
    {
        $review = new Review();
        $book = new Book();
        $book->title = 'Test Book';
        $review->book = $book;
        $this->assertSame($book, $review->book);
    }

    public function testEmptyFullName()
    {
        $review = new Review();
        $review->fullName = '';
        $this->assertSame('', $review->fullName);
    }

    public function testEmptyEmail()
    {
        $review = new Review();
        $review->email = '';
        $this->assertSame('', $review->email);
    }

    public function testEmptyComment()
    {
        $review = new Review();
        $review->comment = '';
        $this->assertSame('', $review->comment);
    }

    public function testNullCreationDate()
    {
        $review = new Review();
        $review->creationDate = null;
        $this->assertNull($review->creationDate);
    }

    public function testNullBook()
    {
        $review = new Review();
        $review->book = null;
        $this->assertNull($review->book);
    }
}