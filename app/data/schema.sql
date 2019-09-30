CREATE DATABASE friend_finder_db; 
USE friend_finder_db;

CREATE TABLE questions (
  id INT NOT NULL AUTO_INCREMENT,
  question INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE friends (
    id INT NOT NULL AUTO_INCREMENT,
    friend_name INT NOT NULL,
    picture_link INT NOT NULL,
    PRIMARY KEY(id),
);

CREATE TABLE scores (
    id INT NOT NULL AUTO_INCREMENT,
    question_id INT NOT NULL,
    friend_id INT NOT NULL,
    score INT NOT NULL,
    PRIMARY KEY(id),
);

INSERT INTO questions (question) 
VALUES 
('You love sports.'), 
('In real life, career comes first and lunch is for losers.'),
('You love dogs and cats.'),
('You like the Democratic Party.'),
('You easily relate to other people’s feelings.'),
('People can rarely upset you.'),
('You are curious by nature and get carried away by new ideas.'),
('You enjoy travelling, going out and meeting people in different places.'),
('Best thing in life is to just sit at home, eat and watch TV.'),
('Saving is money is for wimps. You find the most fun shopping and spending every single buck.')
