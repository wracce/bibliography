package com.wracce.bibliography.module.library;

import com.wracce.bibliography.module.employee.Employee;
import com.wracce.bibliography.module.user.User;
import com.wracce.bibliography.module.userform.UserForm;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(schema = "public")
public class Library {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    public String name;

    @Column(unique = true)
    public String address;

    @Column(unique = true)
    public String phone;

    @Column(unique = true)
    public String email;

    public String dateWork;


    @Column(nullable = false)
    public Integer fineCost;

    @Column(nullable = false)
    public Integer fineDaysCount;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "user_id")
    private User user;

}
