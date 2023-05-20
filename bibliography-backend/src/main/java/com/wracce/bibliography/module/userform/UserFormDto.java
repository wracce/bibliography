package com.wracce.bibliography.module.userform;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDate;

/**
 * A DTO for the {@link UserForm} entity
 */
@Data
public class UserFormDto implements Serializable {
    private final Long id;
    private final String firstName;
    private final String lastName;
    private final String middleName;
    private final LocalDate birthday;
    private final String address;
    private final String phoneNumber;
    private final String email;
    private final LocalDate registrationDate;
    private final Integer debt;
    private final GenderType genderType;
    private final Integer userId;
    private final String userLogin;
}