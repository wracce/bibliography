package com.wracce.bibliography.module.user;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

        Optional<User> findByLogin(String email);

}
