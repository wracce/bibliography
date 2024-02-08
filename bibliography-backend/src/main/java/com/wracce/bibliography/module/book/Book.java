package com.wracce.bibliography.module.book;


import com.wracce.bibliography.module.author.Author;
import com.wracce.bibliography.module.bookadding.BookAdding;
import com.wracce.bibliography.module.booklending.BookLending;
import com.wracce.bibliography.module.bookloosing.BookLoosing;
import com.wracce.bibliography.module.genre.Genre;
import com.wracce.bibliography.module.payment.Payment;
import com.wracce.bibliography.module.publisher.Publisher;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "Book", schema = "public", uniqueConstraints = {
        @UniqueConstraint(name = "uc_book_name_edition", columnNames = {"name", "edition", "editionYear", "publisher_id"})
})
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;

    @Column(nullable = false)
    private String name;

    private String edition;

    private Integer editionYear;

    @Column(unique = true)
    private String ISBN;

    private Integer pageCount;

    @Column(nullable = false)
    private Integer instanceCount;

    @Column(nullable = false)
    private Integer issuedCount;

    @ManyToOne
    @JoinColumn(name = "publisher_id")
    private Publisher publisher;

    @OneToMany(mappedBy = "book", fetch = FetchType.LAZY)
    private List<BookLending> bookLendings = new ArrayList<>();

    @ManyToMany(cascade = { CascadeType.MERGE})
    @JoinTable(name = "book_authors",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "authors_id"))
    private List<Author> authors = new ArrayList<>();

    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.MERGE
            })
    private List<Genre> genres = new ArrayList<>();

    @OneToMany(mappedBy = "book")
    private List<Payment> payments = new ArrayList<>();

    @OneToMany(mappedBy = "book")
    private List<BookLoosing> bookLoosings = new ArrayList<>();

    @OneToMany(mappedBy = "book")
    private List<BookAdding> bookAddings = new ArrayList<>();

}