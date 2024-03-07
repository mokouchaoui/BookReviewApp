<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * A review of a book.
 */
#[ORM\Entity]
#[ApiResource]
class Review
{
    /**
     * The ID of this review.
     */
    #[ORM\Id, ORM\Column, ORM\GeneratedValue]
    private ?int $id = null;

    /**
     * The full name of the reviewer.
     */
    #[ORM\Column]
    public string $fullName = '';

    /**
     * The email of the reviewer.
     */
    #[ORM\Column]
    public string $email = '';

    /**
     * The body of the review.
     */
    #[ORM\Column(type: 'text')]
    public string $comment = '';

    /**
     * The date of creation of this review.
     */
    #[ORM\Column]
    public ?\DateTimeImmutable $creationDate = null;

    /**
     * The book this review is about. This is a relation to the Book entity.
     */
    #[ORM\ManyToOne(targetEntity: Book::class, inversedBy: 'reviews')]
    public ?Book $book = null;

    public function getId(): ?int
    {
        return $this->id;
    }
}
