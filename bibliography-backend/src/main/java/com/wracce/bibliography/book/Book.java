package com.wracce.bibliography.book;


import com.wracce.bibliography.author.Author;
import com.wracce.bibliography.book.Book;
import com.wracce.bibliography.booklending.BookLending;
import com.wracce.bibliography.bookreservation.BookReservation;
import com.wracce.bibliography.genre.Genre;
import com.wracce.bibliography.publisher.Publisher;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(schema = "public")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;
    private String name;

    private String edition;

    private Integer editionYear;

    private String ISBN;

    private Integer pageCount;

    private Integer instanceCount;

    private Integer issuedCount;

    @ManyToOne
    @JoinColumn(name = "publisher_id")
    private Publisher publisher;

    @OneToMany(mappedBy = "book", fetch = FetchType.LAZY)
    private List<BookReservation> bookReservations = new ArrayList<>();

    @OneToMany(mappedBy = "book", fetch = FetchType.LAZY)
    private List<BookLending> bookLendings = new ArrayList<>();

    @ManyToMany
    @JoinTable(name = "book_authors",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "authors_id"))
    private Set<Author> authors = new LinkedHashSet<>();

    @ManyToMany
    @JoinTable(name = "book_genres",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "genres_id"))
    private Set<Genre> genres = new LinkedHashSet<>();
}