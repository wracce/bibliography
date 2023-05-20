package com.wracce.bibliography.security.auth.exception;

import com.wracce.bibliography.error.ErrorMessage;
import com.wracce.bibliography.error.ErrorType;
import lombok.Getter;

@Getter
public class AuthUserNotValidException extends RuntimeException {
    private final ErrorType errorType = ErrorType.AUTH_USER_NOT_VALID;
    public AuthUserNotValidException(String msg) {
        super(msg);
    }
}
