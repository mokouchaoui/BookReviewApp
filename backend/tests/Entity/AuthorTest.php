<?php

namespace App\Tests\Entity;

use App\Entity\Author;
use PHPUnit\Framework\TestCase;

class AuthorTest extends TestCase
{
    public function testAuthorSettersAndGetters()
    {
        $author = new Author();
        $author->firstName = 'John'; // Corrected to match the assertion
        $author->lastName = 'Doe';
        $author->bibliography = 'John Doe\'s bibliography';

        $this->assertSame('John', $author->firstName);
        $this->assertSame('Doe', $author->lastName);
        $this->assertSame('John Doe\'s bibliography', $author->bibliography);
    }

    public function testAuthorBooks()
    {
        $author = new Author();
        $this->assertIsIterable($author->books);
    }

    public function testAuthorId()
    {
        $author = new Author();
        $this->assertNull($author->getId());
    }

    public function testAuthorFirstNameIsString()
    {
        $author = new Author();
        $this->assertIsString($author->firstName);
    }

    public function testAuthorLastNameIsString()
    {
        $author = new Author();
        $this->assertIsString($author->lastName);
    }

    public function testAuthorBibliographyIsString()
    {
        $author = new Author();
        $this->assertIsString($author->bibliography);
    }

    public function testAuthorFirstNameNotEmpty()
    {
        $author = new Author();
        $author->firstName = 'John';
        $this->assertNotEmpty($author->firstName);
    }

    public function testAuthorLastNameNotEmpty()
    {
        $author = new Author();
        $author->lastName = 'Doe';
        $this->assertNotEmpty($author->lastName);
    }

    public function testAuthorBibliographyNotEmpty()
    {
        $author = new Author();
        $author->bibliography = 'John Doe\'s bibliography';
        $this->assertNotEmpty($author->bibliography);
    }

    public function testAuthorIdIsNullable()
    {
        $author = new Author();
        $this->assertNull($author->getId());
    }

    public function testAuthorBooksIsIterable()
    {
        $author = new Author();
        $this->assertIsIterable($author->books);
    }
}
