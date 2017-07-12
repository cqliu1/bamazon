DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Laptop","Electronics",500.00,20),
("TV","Electronics",800.00,10),
("Shampoo","Health",10.00,100),
("Slinky","Toy",1.00,80),
("Lipstick","Beauty",15.00,60),
("Chair","Home",50.00,40),
("Scissors","Office",500.00,20),
("T-Shirt","Clothing",5.00,150),
("Jeans","Clothing",10.00,200),
("Shoes","Clothing",20.00,100);

SELECT * FROM products;