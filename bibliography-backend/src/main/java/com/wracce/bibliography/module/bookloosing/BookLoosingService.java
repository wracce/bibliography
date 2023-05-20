package com.wracce.bibliography.module.bookloosing;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class BookLoosingService {
    private final BookLoosingRepository bookLoosingRepository;

    public List<BookLoosing> findAll() {
        return bookLoosingRepository.findAll();
    }

    public BookLoosing create(BookLoosing bookLoosing) {
        return bookLoosingRepository.save(bookLoosing);
    }

    public BookLoosing update(BookLoosing bookLoosing) {
        return bookLoosingRepository.save(bookLoosing);
    }

    public void delete(Long id) {
        bookLoosingRepository.deleteById(id);
    }
}
