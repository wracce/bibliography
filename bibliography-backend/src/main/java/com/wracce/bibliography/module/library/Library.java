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

    public String name;

    public String address;

    public String phone;

    public String email;

    public String dateWork;


    public Integer fineCost;

    public Integer fineDaysCount;

    @OneToMany(mappedBy = "library", orphanRemoval = true)
    private List<UserForm> userForms = new ArrayList<>();

    @OneToMany(mappedBy = "library", orphanRemoval = true)
    private List<Employee> employees = new ArrayList<>();

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "user_id")
    private User user;

}
