package com.wracce.bibliography.module.bookadding;

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
public class BookAdding {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE})
    @JoinColumn(name = "book_id")
    private Book book;

    @Column(nullable = false)
    private Integer amount;

    @Column(nullable = false)
    private String reason;

    @Column(nullable = false)
    private LocalDate date;

}