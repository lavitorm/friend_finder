CREATE DATABASE friend_finder_db; 
USE friend_finder_db;

CREATE TABLE questions (
  question_id INT NOT NULL AUTO_INCREMENT,
  question VARCHAR(255),
  PRIMARY KEY (question_id)
);

CREATE TABLE friends (
    friend_id INT NOT NULL AUTO_INCREMENT,
    friend_name VARCHAR(255),
    picture_link VARCHAR(255),
    PRIMARY KEY(friend_id),
);

CREATE TABLE scores (
    friend_id INT NOT NULL,
    question_id INT NOT NULL,
    score INT NOT NULL,
    FOREIGN KEY (friend_id) REFERENCES friends(friend_id),
    FOREIGN KEY (question_id) REFERENCES questions(question_id)
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

