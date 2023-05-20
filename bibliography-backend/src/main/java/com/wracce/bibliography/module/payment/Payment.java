package com.wracce.bibliography.module.payment;

import com.wracce.bibliography.module.book.Book;
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
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    @ManyToOne
    @JoinColumn(name = "user_form_id")
    private UserForm userForm;

    private Double cost;

    private LocalDate date;



}