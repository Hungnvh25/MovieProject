package com.movieproject.movieproject.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "mylist")
public class mylist {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "user_id")
    private int user_id;

    @Column(name = "movie_id")
    private int movie_id;


}
