CREATE TABLE authors (
  id varchar(36),
  name text,
  date_of_birth DATE,
  Primary Key (id)
);
						
CREATE TABLE books (
  id varchar(36),
  author_id varchar(36),
  isbn text,
  Primary Key (id),
  Foreign Key (author_id) references authors(id)
);
						
CREATE TABLE sale_items (
  id varchar(36),
  book_id varchar(36),
  customer_name text,
  item_price decimal(5,2),			
  quantity integer,
  Primary Key (id),
  Foreign Key (book_id) references books(id)
);


