package com.wracce.bibliography.module.employee;

import com.wracce.bibliography.module.user.User;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link Employee}
 */
@Value
public class EmployeeDto implements Serializable {
    Long id;
    User user;
}