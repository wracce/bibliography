package com.wracce.bibliography.module.bookreservation;

import com.wracce.bibliography.module.book.Book;
import com.wracce.bibliography.module.userform.UserForm;
import jakarta.persistence.*;

import java.time.LocalDate;

//@Builder
//@NoArgsConstructor
//@AllArgsConstructor
//@Getter
//@Setter
//@Entity
//@Table(schema = "public")
public class BookReservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    @ManyToOne
    @JoinColumn(name = "user_form_id")
    private UserForm userForm;


    private LocalDate reservationDate;

    private LocalDate expiryDate;
}
