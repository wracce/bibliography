package com.wracce.bibliography.error;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class ErrorMessage {
    private ErrorType statusCode;
    private LocalDateTime timestamp;
    private String message;
    private String description;
}