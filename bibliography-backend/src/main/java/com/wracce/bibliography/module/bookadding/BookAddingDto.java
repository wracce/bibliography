package com.wracce.bibliography.module.bookadding;

import com.wracce.bibliography.module.book.BookDto;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDate;

/**
 * A DTO for the {@link BookAdding} entity
 */
@Data
public class BookAddingDto implements Serializable {
    private final Long id;
    private final BookDto book;
    private final Integer amount;
    private final String reason;
    private final LocalDate date;
}