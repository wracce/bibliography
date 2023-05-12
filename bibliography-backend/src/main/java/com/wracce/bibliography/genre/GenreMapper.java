package com.wracce.bibliography.genre;

import com.wracce.bibliography.publisher.Publisher;
import com.wracce.bibliography.publisher.PublisherDto;
import org.mapstruct.*;

import java.util.List;
import java.util.Set;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface GenreMapper {
    Genre toEntity(GenreDto genreDto);

    GenreDto toDto(Genre genre);

    List<Genre> toEntity(List<GenreDto> genreDtoSet);

    List<GenreDto> toDto(List<Genre> genre);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Genre partialUpdate(GenreDto genreDto, @MappingTarget Genre genre);

    Publisher toEntity1(PublisherDto publisherDto);

    PublisherDto toDto1(Publisher publisher);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Publisher partialUpdate1(PublisherDto publisherDto, @MappingTarget Publisher publisher);
}