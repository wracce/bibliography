package com.wracce.bibliography.userform;

import com.wracce.bibliography.booklending.BookLending;
import com.wracce.bibliography.bookreservation.BookReservation;
import com.wracce.bibliography.security.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
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

    @OneToOne(mappedBy = "userForm")
    private User user;

    @OneToMany(mappedBy = "userForm", fetch = FetchType.LAZY)
    private List<BookReservation> bookReservations = new ArrayList<>();


    @OneToMany(mappedBy = "userForm", fetch = FetchType.LAZY)
    private List<BookLending> bookLendings = new ArrayList<>();

}
