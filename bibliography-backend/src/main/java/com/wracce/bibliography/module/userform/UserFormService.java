package com.wracce.bibliography.module.userform;

import com.wracce.bibliography.module.user.UserRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserFormService {
    private final UserFormRepository userFormRepository;
    private final UserRepository userRepository;


    public List<UserForm> findAll() {
        return userFormRepository.findAll();
    }

    public UserForm create(UserForm userForm) {
        return userFormRepository.save(userForm);
    }

    @Transactional
    public UserForm update(UserForm userForm) {
//        userRepository.save(userForm.getUser());
        return userFormRepository.save(userForm);
    }

    public UserForm findByUsername(String username) {
        return userFormRepository.findByUser_Username(username);
    }

    public void delete(Long id) {
        userFormRepository.deleteById(id);
    }
}
