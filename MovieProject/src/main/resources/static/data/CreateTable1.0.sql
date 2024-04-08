use movie;

CREATE TABLE User (
    id INT PRIMARY KEY AUTO_INCREMENT,
    userName VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255)
);

CREATE TABLE Movie (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    title VARCHAR(255),
    views INT,
    likes INT,
    description VARCHAR(255), 
    year INT,
    age INT
);

CREATE TABLE Genre (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);


CREATE TABLE Mylist (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    movie_id INT,
    FOREIGN KEY (user_id) REFERENCES User(id),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);


CREATE TABLE MovieGenre (
    movie_id INT,
    genre_id INT,
    PRIMARY KEY (movie_id, genre_id),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (genre_id) REFERENCES Genre(id)
);

CREATE TABLE Country (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255)
);

CREATE TABLE Actor (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE MovieActor (
    movie_id INT,
    actor_id INT,
    PRIMARY KEY (movie_id, actor_id),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

CREATE TABLE Comment (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    text VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES User(id)
);
