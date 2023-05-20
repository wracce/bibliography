package com.wracce.bibliography.module.booklending;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class BookLendingService {
    private final BookLendingRepository bookLendingRepository;

    public List<BookLending> findAll() {
        return bookLendingRepository.findAll();
    }

    public BookLending create(BookLending bookLending) {
        return bookLendingRepository.save(bookLending);
    }

    public BookLending update(BookLending bookLending) {
        return bookLendingRepository.save(bookLending);
    }

    public void delete(Long id) {
        bookLendingRepository.deleteById(id);
    }
}
