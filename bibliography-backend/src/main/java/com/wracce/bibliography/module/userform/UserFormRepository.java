package com.wracce.bibliography.module.userform;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserFormRepository extends JpaRepository<UserForm, Long> {
    UserForm findByUser_Login(String username);
}