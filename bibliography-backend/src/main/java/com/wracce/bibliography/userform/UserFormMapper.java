package com.wracce.bibliography.userform;

import com.wracce.bibliography.userform.UserForm;
import org.mapstruct.*;

import java.util.List;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface UserFormMapper {
    @Mapping(source = "userLogin", target = "user.login")
    @Mapping(source = "userId", target = "user.id")
    UserForm toEntity(UserFormDto userFormDto);

    @Mapping(source = "user.login", target = "userLogin")
    @Mapping(source = "user.id", target = "userId")
    UserFormDto toDto(UserForm userForm);

    List<UserForm> toEntity(List<UserFormDto> userFormDto);

    List<UserFormDto> toDto(List<UserForm> userForm);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    UserForm partialUpdate(UserFormDto userFormDto, @MappingTarget UserForm userForm);
}