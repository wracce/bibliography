package com.wracce.bibliography.module.employee;

import com.wracce.bibliography.module.genre.Genre;
import com.wracce.bibliography.module.genre.GenreDto;
import org.mapstruct.*;

import java.util.List;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface EmployeeMapper {
    Employee toEntity(EmployeeDto employeeDto);

    EmployeeDto toDto(Employee employee);

    List<Employee> toEntity(List<EmployeeDto> employeeDtoList);

    List<EmployeeDto> toDto(List<Employee> employeeSet);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Employee partialUpdate(EmployeeDto employeeDto, @MappingTarget Employee employee);
}