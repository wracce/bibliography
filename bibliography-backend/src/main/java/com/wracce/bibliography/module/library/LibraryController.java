package com.wracce.bibliography.module.library;

import com.wracce.bibliography.module.library.LibraryDto;
import com.wracce.bibliography.module.library.LibraryMapper;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/library")
public class LibraryController {
    private final LibraryService libraryService;
    private final LibraryMapper mapper;

    @GetMapping
    public List<LibraryDto> getAll() {
        return mapper.toDto(libraryService.findAll());
//        return libraryService.findAll().stream().map(libraryMapper::toDto).collect(Collectors.toList());
    }

    @PostMapping
    public LibraryDto create(@RequestBody LibraryDto libraryDto) {
        return mapper.toDto(libraryService.create(mapper.toEntity(libraryDto)));
    }

    @PutMapping
    public LibraryDto update(@RequestBody LibraryDto libraryDto) {
        return mapper.toDto(libraryService.update(mapper.toEntity(libraryDto)));}

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        libraryService.delete(id);
    }

}
