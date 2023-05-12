package com.wracce.bibliography.bookreservation;

import com.wracce.bibliography.book.Book;
import com.wracce.bibliography.bookreturning.BookReturning;
import com.wracce.bibliography.userform.UserForm;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(schema = "public")
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
