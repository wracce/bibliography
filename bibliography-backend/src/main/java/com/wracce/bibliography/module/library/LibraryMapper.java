package com.wracce.bibliography.module.library;

import com.wracce.bibliography.module.library.Library;
import com.wracce.bibliography.module.library.LibraryDto;
import org.mapstruct.*;

import java.util.List;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface LibraryMapper {
    Library toEntity(LibraryDto libraryDto);

    LibraryDto toDto(Library library);

    List<Library> toEntity(List<LibraryDto> libraryDtoList);

    List<LibraryDto> toDto(List<Library> libraryList);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Library partialUpdate(LibraryDto libraryDto, @MappingTarget Library library);
}