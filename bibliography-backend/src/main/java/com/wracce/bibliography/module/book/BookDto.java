package com.wracce.bibliography.module.book;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.wracce.bibliography.module.author.AuthorDto;
import com.wracce.bibliography.module.genre.GenreDto;
import com.wracce.bibliography.module.publisher.PublisherDto;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * A DTO for the {@link Book} entity
 */
@Data
public class BookDto implements Serializable {
    private final Long id;
    private final String description;
    private final String name;
    private final String edition;
    private final Integer editionYear;
    @JsonProperty("isbn")

    private final String ISBN;
    private final Integer pageCount;
    private final Integer instanceCount;
    private final Integer issuedCount;
    private final PublisherDto publisher;
    private final List<AuthorDto> authors;
    private final List<GenreDto> genres;
}