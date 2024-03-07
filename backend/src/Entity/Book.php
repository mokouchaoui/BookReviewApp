<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

#[ORM\Entity]
#[ApiResource]
#[ApiFilter(SearchFilter::class, properties: [
    'title' => 'partial',
    'author' => 'exact',
    'genre' => 'exact'
])]
class Book
{
    #[ORM\Id, ORM\Column, ORM\GeneratedValue]
    private ?int $id = null;

    #[ORM\Column]
    public string $title = '';

    #[ORM\Column(type: 'text')]
    public string $description = '';

    #[ORM\Column]
    public string $genre = '';

    #[ORM\Column]
    public ?\DateTimeImmutable $publicationDate = null;

    #[ORM\ManyToOne(targetEntity: Author::class, inversedBy: 'books')]
    public ?Author $author = null;

    #[ORM\OneToMany(targetEntity: Review::class, mappedBy: 'book', cascade: ['persist', 'remove'])]
    public iterable $reviews;

    public function __construct()
    {
        $this->reviews = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }
}
