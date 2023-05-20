package com.wracce.bibliography.module.userform;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/userform")
public class UserFormController {
    private final UserFormService userFormService;
    private final UserFormMapper mapper;

    @GetMapping
    public List<UserFormDto> getAll() {
        return mapper.toDto(userFormService.findAll());
//        return userFormService.findAll().stream().map(userFormMapper::toDto).collect(Collectors.toList());
    }

    @GetMapping("/{username}")
    public UserFormDto getByUserName(@PathVariable String username) {
        return mapper.toDto(userFormService.findByUsername(username));
    }

    @PostMapping
    public UserFormDto create(@RequestBody UserFormDto userFormDto) {
        return mapper.toDto(userFormService.create(mapper.toEntity(userFormDto)));
    }

    @PutMapping
    public UserFormDto update(@RequestBody UserFormDto userFormDto) {
        return mapper.toDto(userFormService.update(mapper.toEntity(userFormDto)));}

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        userFormService.delete(id);
    }

}
