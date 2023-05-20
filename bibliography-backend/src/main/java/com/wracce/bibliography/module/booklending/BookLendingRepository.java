package com.wracce.bibliography.module.booklending;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BookLendingRepository extends JpaRepository<BookLending, Long> {
}