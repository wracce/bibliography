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

    private String firstName;
    private String lastName;
    private String middleName;

    private LocalDate birthday;

    private String address;

    private String phoneNumber;

    private String email;

    private LocalDate registrationDate;

    private Integer debt;

    @Enumerated(EnumType.STRING)
    @Column(name = "gender_type")
    private GenderType genderType;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

//    @OneToMany(mappedBy = "userForm", fetch = FetchType.LAZY)
//    private List<BookReservation> bookReservations = new ArrayList<>();


    @OneToMany(mappedBy = "userForm", fetch = FetchType.LAZY)
    private List<BookLending> bookLendings = new ArrayList<>();

    @OneToMany(mappedBy = "userForm")
    private List<Payment> payments = new ArrayList<>();

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "library_id")
    private Library library;

}
