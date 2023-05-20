package com.wracce.bibliography.module.bookloosing;

import com.wracce.bibliography.module.book.BookDto;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDate;

/**
 * A DTO for the {@link BookLoosing} entity
 */
@Data
public class BookLoosingDto implements Serializable {
    private final Long id;
    private final BookDto book;
    private final Integer amount;
    private final String reason;
    private final LocalDate date;
}