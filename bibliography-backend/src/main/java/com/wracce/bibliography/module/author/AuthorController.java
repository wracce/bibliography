package com.wracce.bibliography.module.author;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/author")
public class AuthorController {
    private final AuthorService authorService;
    private final AuthorMapper mapper;

    @GetMapping
    public List<AuthorDto> getAll() {
        return mapper.toDto(authorService.findAll());
//        return authorService.findAll().stream().map(authorMapper::toDto).collect(Collectors.toList());
    }

    @PostMapping
    public AuthorDto create(@RequestBody AuthorDto authorDto) {
        return mapper.toDto(authorService.create(mapper.toEntity(authorDto)));
    }

    @PutMapping
    public AuthorDto update(@RequestBody AuthorDto authorDto) {
        return mapper.toDto(authorService.update(mapper.toEntity(authorDto)));}

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        authorService.delete(id);
    }

}
