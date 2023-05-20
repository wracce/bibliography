package com.wracce.bibliography.module.booklending;

import com.wracce.bibliography.module.book.BookMapper;
import com.wracce.bibliography.module.bookreturning.BookReturningMapper;
import com.wracce.bibliography.module.userform.UserFormMapper;
import org.mapstruct.*;

import java.util.List;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING, uses = {BookMapper.class, UserFormMapper.class, BookReturningMapper.class})
public interface BookLendingMapper {
    BookLending toEntity(BookLendingDto bookLendingDto);

    BookLendingDto toDto(BookLending bookLending);

    List<BookLending> toEntity(List<BookLendingDto> bookDto);

    List<BookLendingDto> toDto(List<BookLending> bookLending);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    BookLending partialUpdate(BookLendingDto bookLendingDto, @MappingTarget BookLending bookLending);
}