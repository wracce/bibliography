package com.wracce.bibliography.security.auth.exception;

public class AuthExpiredTokenException extends RuntimeException {
    public AuthExpiredTokenException(String msg) {
        super(msg);
    }
}
