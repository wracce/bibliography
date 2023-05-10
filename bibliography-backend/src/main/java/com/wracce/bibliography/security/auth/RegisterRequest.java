package com.wracce.bibliography.security.auth;

import com.wracce.bibliography.security.user.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
  private String login;
  private String password;
  private Role role;
}
