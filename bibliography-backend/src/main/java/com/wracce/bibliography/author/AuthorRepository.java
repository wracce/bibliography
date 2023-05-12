package com.wracce.bibliography.author;

import com.wracce.bibliography.author.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepository extends JpaRepository<Author, Long> {
}