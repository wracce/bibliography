package com.wracce.bibliography.module.genre;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/genre")
public class GenreController {
    private final GenreService genreService;
    private final GenreMapper mapper;

    @GetMapping
    public List<GenreDto> getAll() {
        return mapper.toDto(genreService.findAll());
//        return genreService.findAll().stream().map(genreMapper::toDto).collect(Collectors.toList());
    }

    @PostMapping
    public GenreDto create(@RequestBody GenreDto genreDto) {
        return mapper.toDto(genreService.create(mapper.toEntity(genreDto)));
    }

    @PutMapping
    public GenreDto update(@RequestBody GenreDto genreDto) {
        return mapper.toDto(genreService.update(mapper.toEntity(genreDto)));}

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        genreService.delete(id);
    }

}
