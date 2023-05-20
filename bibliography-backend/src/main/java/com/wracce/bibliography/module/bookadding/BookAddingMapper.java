package com.wracce.bibliography.module.bookadding;

import com.wracce.bibliography.module.book.BookMapper;
import org.mapstruct.*;

import java.util.List;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING, uses = {BookMapper.class})
public interface BookAddingMapper {
    BookAdding toEntity(BookAddingDto bookAddingDto);

    BookAddingDto toDto(BookAdding bookAdding);

    List<BookAdding> toEntity(List<BookAddingDto> publisherDto);

    List<BookAddingDto> toDto(List<BookAdding> publisher);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    BookAdding partialUpdate(BookAddingDto bookAddingDto, @MappingTarget BookAdding bookAdding);
}