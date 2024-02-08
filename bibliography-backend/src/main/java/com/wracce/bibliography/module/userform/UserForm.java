package com.wracce.bibliography.module.userform;

import com.wracce.bibliography.module.booklending.BookLending;
import com.wracce.bibliography.module.library.Library;
import com.wracce.bibliography.module.payment.Payment;
import com.wracce.bibliography.module.user.User;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(schema = "public")
public class UserForm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String lastName;
    @Column(nullable = false)
    private String middleName;

    @Column(nullable = false)
    private LocalDate birthday;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false, unique = true)
    private String phoneNumber;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private LocalDate registrationDate;

    @Column(nullable = false, updatable = false)
    private Integer debt;

    @Enumerated(EnumType.STRING)
    @Column(name = "gender_type", nullable = false)
    private GenderType genderType;

    @OneToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "user_id", updatable = false)
    private User user;

//    @OneToMany(mappedBy = "userForm", fetch = FetchType.LAZY)
//    private List<BookReservation> bookReservations = new ArrayList<>();


    @OneToMany(mappedBy = "userForm", fetch = FetchType.LAZY)
    private List<BookLending> bookLendings = new ArrayList<>();

    @OneToMany(mappedBy = "userForm")
    private List<Payment> payments = new ArrayList<>();

}
