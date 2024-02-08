package com.wracce.bibliography.module.bookloosing;

import com.wracce.bibliography.module.book.Book;
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
public class BookLoosing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    @Column(nullable = false)
    public Integer amount;

    @Column(nullable = false)
    private String reason;

    @Column(nullable = false)
    private LocalDate date;

}