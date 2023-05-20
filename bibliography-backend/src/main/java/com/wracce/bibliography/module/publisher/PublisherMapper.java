package com.wracce.bibliography.module.publisher;

import org.mapstruct.*;

import java.util.List;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface PublisherMapper {
    Publisher toEntity(PublisherDto publisherDto);

    PublisherDto toDto(Publisher publisher);

    List<Publisher> toEntity(List<PublisherDto> publisherDto);

    List<PublisherDto> toDto(List<Publisher> publisher);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Publisher partialUpdate(PublisherDto publisherDto, @MappingTarget Publisher publisher);
}