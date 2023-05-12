package com.wracce.bibliography.author;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDate;

/**
 * A DTO for the {@link Author} entity
 */
@Data
public class AuthorDto implements Serializable {
    private final Long id;
    private final String firstName;
    private final String lastName;
    private final String middleName;
    private final String country;
    private final LocalDate birthday;
}