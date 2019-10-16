USE fashion_trader;

INSERT INTO users(firstName, lastName, email, password, isAdmin)
VALUES ("Jason", "Whited", "j@w.co", "abcd", true);
INSERT INTO users(firstName, lastName, email, password, isAdmin)
VALUES ("Jeff", "Swanner", "je@s.co", "efgh", true);
INSERT INTO users(firstName, lastName, email, password, isAdmin)
VALUES ("Frank", "Zachary", "f@z.co", "ijkl", true);
INSERT INTO users(firstName, lastName, email, password, isAdmin)
VALUES ("Krishti", "Bhowmick", "k@b.co", "mnop", true);

INSERT INTO items(user_id, department, product, price)
VALUES ("4", "Shoes", "Sandals", 45);
INSERT INTO items(user_id, department, product, price)
VALUES ("4", "Dresses", "A-line", 66);
INSERT INTO items(user_id, department, product, price)
VALUES ("2", "Shoes", "Boots", 88);
INSERT INTO items(user_id, department, product, price)
VALUES ("1", "Accesories", "Belt", 20);
INSERT INTO items(user_id, department, product, price)
VALUES ("3", "Pants", "Slacks", 50);
INSERT INTO items(user_id, department, product, price)
VALUES ("3", "Shirts", "Graphic shirt", 15);


INSERT INTO Users (firstName, lastName, email, password, isAdmin)
VALUES ("Joe", "Gates", "j@g.co", "$2b$10$afGmlGCU0AGEzZBILPyPWOfSclxjMxKocB8QXv8CqhN73IHUUp7Gi", true);

INSERT INTO Users (firstName, lastName, email, password, isAdmin)
VALUES ("Jane", "Jobs", "j@j.co", "$2b$10$afGmlGCU0AGEzZBILPyPWOfSclxjMxKocB8QXv8CqhN73IHUUp7Gi", false);

-- INSERT INTO users(firstName, lastName, email, password)
-- VALUES ("Jason", "Whited", "j@w.co", "abcd"), ("Jeff", "Swanner", "je@s.co", "efgh"), ("Frank", "Zachary", "f@gz.co", "ijkl"), ("Krishti", "Bhowmick", "k@b.co", "mnop");

-- INSERT INTO items(user_id, department, product, price)
-- VALUES ("4", "Shoes", "Sandals", 45), ("4", "Dresses", "A-line", 66), ("2", "Shoes", "Boots", 88), ("1", "Accesories", "Belt", 20), ("3", "Pants", "Slacks", 50), ("3", "Shirts", "Graphic shirt", 15);
