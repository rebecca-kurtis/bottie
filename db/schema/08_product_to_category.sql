-- DROP and CREATE product to category TABLE
DROP TABLE IF EXISTS product_to_category CASCADE;

CREATE TABLE product_to_category (
id SERIAL PRIMARY KEY NOT NULL,
category_id INT,
product_id INT,
FOREIGN KEY(category_id) REFERENCES categories,
FOREIGN KEY(product_id) REFERENCES products
);