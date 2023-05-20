package com.wracce.bibliography.module.booklending;

import com.wracce.bibliography.module.book.BookDto;
import com.wracce.bibliography.module.bookreturning.BookReturningDto;
import com.wracce.bibliography.module.userform.UserFormDto;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDate;

/**
 * A DTO for the {@link BookLending} entity
 */
@Data
public class BookLendingDto implements Serializable {
    private final Long id;
    private final BookDto book;
    private final UserFormDto userForm;
    private final LocalDate lendingDate;
    private final LocalDate returnDate;
    private final BookReturningDto bookReturning;
}