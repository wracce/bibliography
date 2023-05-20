package com.wracce.bibliography.module.booklending;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/book-lending")
public class BookLendingController {
    private final BookLendingService bookLendingService;
    private final BookLendingMapper mapper;

    @GetMapping
    public List<BookLendingDto> getAll() {
        return mapper.toDto(bookLendingService.findAll());
    }

    @PostMapping
    public BookLendingDto create(@RequestBody BookLendingDto bookLendingDto) {
        return mapper.toDto(bookLendingService.create(mapper.toEntity(bookLendingDto)));
    }

    @PutMapping
    public BookLendingDto update(@RequestBody BookLendingDto bookLendingDto) {
        return mapper.toDto(bookLendingService.update(mapper.toEntity(bookLendingDto)));}

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        bookLendingService.delete(id);
    }

}
