package com.wracce.bibliography.module.library;

import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link Library}
 */
@Value
public class LibraryDto implements Serializable {
    Long id;
    String name;
    String address;
    String phone;
    String email;
    String dateWork;
    Integer fineCost;
    Integer fineDaysCount;
}