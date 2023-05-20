package com.wracce.bibliography.module.bookreturning;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDate;

/**
 * A DTO for the {@link BookReturning} entity
 */
@Data
public class BookReturningDto implements Serializable {
    private final Long id;
    private final LocalDate returnDate;
    private final Double fineAmount;
}