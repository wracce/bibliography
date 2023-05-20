package com.wracce.bibliography.security.auth;

import com.wracce.bibliography.error.ErrorMessage;
import com.wracce.bibliography.error.ErrorType;
import com.wracce.bibliography.security.auth.exception.AuthUserNotValidException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@ControllerAdvice
public class AuthenticationControllerAdvice {
    @ExceptionHandler(AuthUserNotValidException.class)
    public ResponseEntity<ErrorMessage> UserNotFoundException(AuthUserNotValidException ex, WebRequest req) {
        return new ResponseEntity(new ErrorMessage(ex.getErrorType(), LocalDateTime.now(), ex.getMessage(), req.getDescription(false)), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
