package com.wracce.bibliography.security.auth.exception;

import com.wracce.bibliography.error.ErrorMessage;
import com.wracce.bibliography.error.ErrorType;
import lombok.Getter;

public class AuthUserNotValidException extends RuntimeException {
    public AuthUserNotValidException(String msg) {
        super(msg);
    }
}
