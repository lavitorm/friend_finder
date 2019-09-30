
USE friend_finder_db;

INSERT INTO friends (friend_name, picture_link) 
VALUES
("Brad", "https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2019-09/gettyimages-1175609064.jpg?itok=VJz1jPYn&h=bd90f99b"),
("Charles", "https://cdn1.thr.com/sites/default/files/imagecache/NFE_portrait/2011/05/charles_bronson_2011_a_p.jpg"),
("Brad", "https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2019-09/gettyimages-1175609064.jpg?itok=VJz1jPYn&h=bd90f99b"),
("Kitty", "https://media.kgw.com/assets/KGW/images/222788ef-51a3-4b4e-8760-7f531d05d1fb/222788ef-51a3-4b4e-8760-7f531d05d1fb_360x203.jpg")

INSERT INTO scores (friend_id, question_id, score) 
VALUES 
(1,1,1), (1,2,3), (1,3,3), (1,4,5), (1,5,4), (1,6,2), (1,7,1), (1,8,1), (1,9,5), (1,10,1),
(2,1,2), (2,2,2), (2,3,4), (2,4,4), (2,5,4), (2,6,2), (2,7,2), (2,8,3), (2,9,3), (2,10,5),
(3,1,3), (3,2,1), (3,3,5), (3,4,3), (3,5,4), (3,6,2), (3,7,3), (3,8,5), (3,9,1), (3,10,2)
