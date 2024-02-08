package com.wracce.bibliography.module.bookreturning;

import com.wracce.bibliography.module.booklending.BookLending;
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
public class BookReturning {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(mappedBy = "bookReturning")
    private BookLending bookLending;

    @Column(nullable = false)
    private LocalDate returnDate;

    @Column(nullable = false)
    private Double fineAmount;


}