package com.wracce.bibliography.module.author;

import com.wracce.bibliography.module.book.Book;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "Author", schema = "public", uniqueConstraints = {
        @UniqueConstraint(name = "uc_author_firstname_lastname", columnNames = {"firstName", "lastName", "middleName", "country", "birthday"})
})
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String middleName;
    private String country;

    private LocalDate birthday;

    @ManyToMany(mappedBy = "authors", fetch = FetchType.LAZY)
    private List<Book> books = new ArrayList<>();

}
