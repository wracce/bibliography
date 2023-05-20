package com.wracce.bibliography.module.genre;

import com.wracce.bibliography.module.publisher.Publisher;
import com.wracce.bibliography.module.publisher.PublisherDto;
import org.mapstruct.*;

import java.util.List;

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