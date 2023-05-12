package com.wracce.bibliography.book;

import com.wracce.bibliography.book.BookDto;
import com.wracce.bibliography.book.BookMapper;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/book")
public class BookController {
    private final BookService bookService;
    private final BookMapper mapper;

    @GetMapping
    public List<BookDto> getAll() {
        return mapper.toDto(bookService.findAll());
//        return bookService.findAll().stream().map(bookMapper::toDto).collect(Collectors.toList());
    }

    @PostMapping
    public BookDto create(@RequestBody BookDto bookDto) {
        return mapper.toDto(bookService.create(mapper.toEntity(bookDto)));
    }

    @PutMapping
    public BookDto update(@RequestBody BookDto bookDto) {
        return mapper.toDto(bookService.update(mapper.toEntity(bookDto)));}

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        bookService.delete(id);
    }

}
