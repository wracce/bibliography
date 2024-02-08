package com.wracce.bibliography.error;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.extern.jackson.Jacksonized;

import java.time.LocalDateTime;

@Data
@Getter
@AllArgsConstructor
@Builder
@Jacksonized
public class ErrorMessage {
    private ErrorType statusCode;
    private LocalDateTime timestamp;
    private String message;
    private String description;
}