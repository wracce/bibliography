package com.wracce.bibliography.module.bookadding;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/book-adding")
public class BookAddingController {
    private final BookAddingService bookAddingService;
    private final BookAddingMapper mapper;

    @GetMapping
    public List<BookAddingDto> getAll() {
        return mapper.toDto(bookAddingService.findAll());
//        return bookAddingService.findAll().stream().map(bookAddingMapper::toDto).collect(Collectors.toList());
    }

    @PostMapping
    public BookAddingDto create(@RequestBody BookAddingDto bookAddingDto) {
        return mapper.toDto(bookAddingService.create(mapper.toEntity(bookAddingDto)));
    }

    @PutMapping
    public BookAddingDto update(@RequestBody BookAddingDto bookAddingDto) {
        return mapper.toDto(bookAddingService.update(mapper.toEntity(bookAddingDto)));}

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        bookAddingService.delete(id);
    }

}
