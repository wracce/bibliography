package com.wracce.bibliography.book;

import com.wracce.bibliography.author.AuthorDto;
import com.wracce.bibliography.genre.GenreDto;
import com.wracce.bibliography.publisher.PublisherDto;
import lombok.Data;

import java.io.Serializable;
import java.util.Set;

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
    private final String ISBN;
    private final Integer pageCount;
    private final Integer instanceCount;
    private final Integer issuedCount;
    private final PublisherDto publisher;
    private final Set<AuthorDto> authors;
    private final Set<GenreDto> genres;
}