INSERT INTO `authors`
(`id`,
`name`,
`date_of_birth`)
VALUES
(uuid(),
'Lorelai Gilmore',
current_date());
INSERT INTO `authors`
(`id`,
`name`,
`date_of_birth`)
VALUES
(uuid(),
'Mark Lawrence',
current_date());
INSERT INTO `authors`
(`id`,
`name`,
`date_of_birth`)
VALUES
(uuid(),
'Steven Erikson',
current_date());
INSERT INTO `authors`
(`id`,
`name`,
`date_of_birth`)
VALUES
(uuid(),
'Random Joe',
current_date());
INSERT INTO `authors`
(`id`,
`name`,
`date_of_birth`)
VALUES
(uuid(),
'Glen Cook',
current_date());
INSERT INTO `authors`
(`id`,
`name`,
`date_of_birth`)
VALUES
(uuid(),
'Alex Marshall',
current_date());
INSERT INTO `authors`
(`id`,
`name`,
`date_of_birth`)
VALUES
(uuid(),
'Brent Week',
current_date());
INSERT INTO `authors`
(`id`,
`name`,
`date_of_birth`)
VALUES
(uuid(),
'Leigh Bardugo ',
current_date());
INSERT INTO `books`
(`id`,
`author_id`,
`isbn`)
VALUES
(uuid(),
(select id from book_store.authors as a where a.name = 'Lorelai Gilmore'),
'0007423292');
INSERT INTO `books`
(`id`,
`author_id`,
`isbn`)
VALUES
(uuid(),
(select id from book_store.authors as a where a.name = 'Lorelai Gilmore'),
'0425256235');
INSERT INTO `books`
(`id`,
`author_id`,
`isbn`)
VALUES
(uuid(),
(select id from book_store.authors as a where a.name = 'Glen Cook'),
'B01BBXF0HM');
INSERT INTO `books`
(`id`,
`author_id`,
`isbn`)
VALUES
(uuid(),
(select id from book_store.authors as a where a.name = 'Mark Lawrence'),
'B00UG9LC4I');
INSERT INTO `sale_items`
(`id`,
`book_id`,
`customer_name`,
`item_price`,
`quantity`)
VALUES
(uuid(),
(select id from book_store.books as b where b.isbn = '0007423292'),
'Antonio',
7.5,
6);
SELECT * FROM book_store.books;
INSERT INTO `sale_items`
(`id`,
`book_id`,
`customer_name`,
`item_price`,
`quantity`)
VALUES
(uuid(),
(select id from book_store.books as b where b.isbn = '0425256235'),
'ED',
5.5,
7);
INSERT INTO `sale_items`
(`id`,
`book_id`,
`customer_name`,
`item_price`,
`quantity`)
VALUES
(uuid(),
(select id from book_store.books as b where b.isbn = 'B01BBXF0HM'),
'CM',
4.5,
8);
INSERT INTO `sale_items`
(`id`,
`book_id`,
`customer_name`,
`item_price`,
`quantity`)
VALUES
(uuid(),
(select id from book_store.books as b where b.isbn = 'B00UG9LC4I'),
'CM',
4.5,
8);
