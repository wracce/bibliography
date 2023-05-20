package com.wracce.bibliography.module.bookadding;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class BookAddingService {
    private final BookAddingRepository bookAddingRepository;

    public List<BookAdding> findAll() {
        return bookAddingRepository.findAll();
    }

    public BookAdding create(BookAdding bookAdding) {
        return bookAddingRepository.save(bookAdding);
    }

    public BookAdding update(BookAdding bookAdding) {
        return bookAddingRepository.save(bookAdding);
    }

    public void delete(Long id) {
        bookAddingRepository.deleteById(id);
    }
}
