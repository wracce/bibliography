package com.wracce.bibliography.genre;

import lombok.Data;

import java.io.Serializable;

/**
 * A DTO for the {@link Genre} entity
 */
@Data
public class GenreDto implements Serializable {
    private final Long id;
    private final String name;
    private final String description;
}