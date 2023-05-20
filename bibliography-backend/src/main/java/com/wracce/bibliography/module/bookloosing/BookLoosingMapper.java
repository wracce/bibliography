package com.wracce.bibliography.module.bookloosing;

import com.wracce.bibliography.module.book.BookMapper;
import org.mapstruct.*;

import java.util.List;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING, uses = {BookMapper.class})
public interface BookLoosingMapper {
    BookLoosing toEntity(BookLoosingDto bookLoosingDto);

    BookLoosingDto toDto(BookLoosing bookLoosing);

    List<BookLoosing> toEntity(List<BookLoosingDto> bookLoosingDto);

    List<BookLoosingDto> toDto(List<BookLoosing> bookLoosing);


    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    BookLoosing partialUpdate(BookLoosingDto bookLoosingDto, @MappingTarget BookLoosing bookLoosing);
}