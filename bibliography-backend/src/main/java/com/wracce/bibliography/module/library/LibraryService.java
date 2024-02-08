package com.wracce.bibliography.module.library;

import com.wracce.bibliography.module.library.Library;
import com.wracce.bibliography.module.library.LibraryRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class LibraryService {
    private final LibraryRepository libraryRepository;

    public List<Library> findAll() {
        return libraryRepository.findAll();
    }

    public Library create(Library library) {
        return libraryRepository.save(library);
    }

    public Library update(Library library) {
        return libraryRepository.save(library);
    }

    public void delete(Long id) {
        libraryRepository.deleteById(id);
    }
}
