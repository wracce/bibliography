package com.wracce.bibliography.module.booklending;

import com.wracce.bibliography.module.book.Book;
import com.wracce.bibliography.module.bookreturning.BookReturning;
import com.wracce.bibliography.module.userform.UserForm;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(schema = "public")
public class BookLending {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    @ManyToOne
    @JoinColumn(name = "user_form_id")
    private UserForm userForm;

    private LocalDate lendingDate;

    private LocalDate returnDate;

    @OneToOne(orphanRemoval = true,cascade = {CascadeType.PERSIST,CascadeType.MERGE})
    @JoinColumn(name = "book_returning_id")
    private BookReturning bookReturning;

}