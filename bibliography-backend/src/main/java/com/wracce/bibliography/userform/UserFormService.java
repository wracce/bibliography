package com.wracce.bibliography.userform;

import com.wracce.bibliography.security.user.User;
import com.wracce.bibliography.security.user.UserRepository;
import com.wracce.bibliography.userform.UserForm;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public void delete(Long id) {
        userFormRepository.deleteById(id);
    }
}
