package com.wracce.bibliography.module.employee;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/employee")
public class EmployeeController {
    private final EmployeeService employeeService;
    private final EmployeeMapper mapper;

    @GetMapping
    public List<EmployeeDto> getAll() {
        return mapper.toDto(employeeService.findAll());
//        return employeeService.findAll().stream().map(employeeMapper::toDto).collect(Collectors.toList());
    }

    @PostMapping
    public EmployeeDto create(@RequestBody EmployeeDto employeeDto) {
        return mapper.toDto(employeeService.create(mapper.toEntity(employeeDto)));
    }

    @PutMapping
    public EmployeeDto update(@RequestBody EmployeeDto employeeDto) {
        return mapper.toDto(employeeService.update(mapper.toEntity(employeeDto)));}

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        employeeService.delete(id);
    }

}
