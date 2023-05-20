package com.wracce.bibliography.module.bookreturning;

import org.mapstruct.*;

import java.util.List;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface BookReturningMapper {
    BookReturning toEntity(BookReturningDto bookReturningDto);

    BookReturningDto toDto(BookReturning bookReturning);

    List<BookReturning> toEntity(List<BookReturningDto> bookDto);

    List<BookReturningDto> toDto(List<BookReturning> book);


    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    BookReturning partialUpdate(BookReturningDto bookReturningDto, @MappingTarget BookReturning bookReturning);
}