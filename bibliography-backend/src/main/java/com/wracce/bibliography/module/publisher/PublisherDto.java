package com.wracce.bibliography.module.publisher;

import lombok.Data;

import java.io.Serializable;

/**
 * A DTO for the {@link Publisher} entity
 */
@Data
public class PublisherDto implements Serializable {
    private final Long id;
    private final String name;
    private final String address;
    private final String phoneNumber;
    private final String email;
}