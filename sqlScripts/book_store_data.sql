INSERT INTO `book_store`.`authors`
(`id`,
`name`,
`date_of_birth`)
VALUES
(uuid(),
'Joe Abercrombie',
current_date());
INSERT INTO `book_store`.`authors`
(`id`,
`name`,
`date_of_birth`)
VALUES
(uuid(),
'Mark Lawrence',
current_date());
INSERT INTO `book_store`.`authors`
(`id`,
`name`,
`date_of_birth`)
VALUES
(uuid(),
'Steven Erikson',
current_date());
INSERT INTO `book_store`.`authors`
(`id`,
`name`,
`date_of_birth`)
VALUES
(uuid(),
'Random Joe',
current_date());
INSERT INTO `book_store`.`authors`
(`id`,
`name`,
`date_of_birth`)
VALUES
(uuid(),
'Glen Cook',
current_date());
INSERT INTO `book_store`.`authors`
(`id`,
`name`,
`date_of_birth`)
VALUES
(uuid(),
'Alex Marshall',
current_date());
INSERT INTO `book_store`.`authors`
(`id`,
`name`,
`date_of_birth`)
VALUES
(uuid(),
'Brent Week',
current_date());
INSERT INTO `book_store`.`authors`
(`id`,
`name`,
`date_of_birth`)
VALUES
(uuid(),
'Leigh Bardugo ',
current_date());

INSERT INTO `book_store`.`books`
(`id`,
`author_id`,
`isbn`)
VALUES
(uuid(),
'358e4e54-bff4-11eb-a58e-0242ac110003',
'0007423292');
INSERT INTO `book_store`.`books`
(`id`,
`author_id`,
`isbn`)
VALUES
(uuid(),
'358e4e54-bff4-11eb-a58e-0242ac110003',
'0425256235');
INSERT INTO `book_store`.`books`
(`id`,
`author_id`,
`isbn`)
VALUES
(uuid(),
'358f03b7-bff4-11eb-a58e-0242ac110003',
'B01BBXF0HM');
INSERT INTO `book_store`.`books`
(`id`,
`author_id`,
`isbn`)
VALUES
(uuid(),
'358f03b7-bff4-11eb-a58e-0242ac110003',
'B00UG9LC4I');
INSERT INTO `book_store`.`sale_items`
(`id`,
`book_id`,
`customer_name`,
`item_price`,
`quantity`)
VALUES
(uuid(),
'35b622c3-bff5-11eb-a58e-0242ac110003',
'Antonio',
7.5,
6);
SELECT * FROM book_store.books;
INSERT INTO `book_store`.`sale_items`
(`id`,
`book_id`,
`customer_name`,
`item_price`,
`quantity`)
VALUES
(uuid(),
'35b63afe-bff5-11eb-a58e-0242ac110003',
'ED',
5.5,
7);
SELECT * FROM book_store.books;
INSERT INTO `book_store`.`sale_items`
(`id`,
`book_id`,
`customer_name`,
`item_price`,
`quantity`)
VALUES
(uuid(),
'35b66e9b-bff5-11eb-a58e-0242ac110003',
'CM',
4.5,
8);
