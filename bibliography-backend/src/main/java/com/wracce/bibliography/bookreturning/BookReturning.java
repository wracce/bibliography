package com.wracce.bibliography.retrurnjournal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class ReturnJournal {

    @Id
    @GeneratedValue
    private Long id;

    private BookLending bookLending;

    private LocalDate returnDate;

    private BigDecimal fineAmount;

    public ReturnJournal() {
    }

    // Геттеры и сеттеры
}