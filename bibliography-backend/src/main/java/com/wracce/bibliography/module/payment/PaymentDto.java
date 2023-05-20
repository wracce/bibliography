package com.wracce.bibliography.module.payment;

import com.wracce.bibliography.module.book.BookDto;
import com.wracce.bibliography.module.userform.UserFormDto;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDate;

/**
 * A DTO for the {@link Payment} entity
 */
@Data
public class PaymentDto implements Serializable {
    private final Long id;
    private final Double cost;
    private final LocalDate date;
    private final BookDto book;
    private final UserFormDto userForm;
}