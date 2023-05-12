package com.wracce.bibliography.bookreturning;

import com.wracce.bibliography.booklending.BookLending;
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
public class BookReturning {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(mappedBy = "bookReturning", fetch = FetchType.LAZY)
    private BookLending bookLending;

    private LocalDate returnDate;

    private Double fineAmount;


}