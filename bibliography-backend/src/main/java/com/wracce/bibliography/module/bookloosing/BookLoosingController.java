package com.wracce.bibliography.module.bookloosing;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/book-loosing")
public class BookLoosingController {
    private final BookLoosingService bookLoosingService;
    private final BookLoosingMapper mapper;

    @GetMapping
    public List<BookLoosingDto> getAll() {
        return mapper.toDto(bookLoosingService.findAll());
    }

    @PostMapping
    public BookLoosingDto create(@RequestBody BookLoosingDto bookLoosingDto) {
        return mapper.toDto(bookLoosingService.create(mapper.toEntity(bookLoosingDto)));
    }

    @PutMapping
    public BookLoosingDto update(@RequestBody BookLoosingDto bookLoosingDto) {
        return mapper.toDto(bookLoosingService.update(mapper.toEntity(bookLoosingDto)));}

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        bookLoosingService.delete(id);
    }

}
