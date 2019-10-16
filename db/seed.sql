USE fashion_trader;

INSERT INTO users(id, firstName, lastName, email, password)
VALUES ("Jason", "Whited", "j@w.co", "abcd");
VALUES ("Jeff", "Swanner", "je@s.co", "efgh");
VALUES ("Frank", "Zachary", "f@gz.co", "ijkl");
VALUES ("Krishti", "Bhowmick", "k@b.co", "mnop");

INSERT INTO items(id, user_id, department, product, price)
VALUES ("4", "Shoes", "Sandals", 45);
VALUES ("4", "Dresses", "A-line", 66);
VALUES ("2", "Shoes", "Boots", 88);
VALUES ("1", "Accesories", "Belt", 20);
VALUES ("3", "Pants", "Slacks", 50);
VALUES ("3", "Shirts", "Graphic shirt", 15);
