package com.wracce.bibliography.module.userform;

import org.mapstruct.*;

import java.util.List;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface UserFormMapper {
    @Mapping(source = "userUsername", target = "user.username")
    @Mapping(source = "userId", target = "user.id")
    UserForm toEntity(UserFormDto userFormDto);

    @Mapping(source = "user.username", target = "userUsername")
    @Mapping(source = "user.id", target = "userId")
    UserFormDto toDto(UserForm userForm);

    List<UserForm> toEntity(List<UserFormDto> userFormDto);

    List<UserFormDto> toDto(List<UserForm> userForm);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    UserForm partialUpdate(UserFormDto userFormDto, @MappingTarget UserForm userForm);
}