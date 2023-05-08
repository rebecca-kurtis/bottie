-- DROP and CREATE product to card_design TABLE
DROP TABLE IF EXISTS card_designs CASCADE;

CREATE TABLE card_designs (
card_design_id SERIAL PRIMARY KEY NOT NULL,
product_id INT,
FOREIGN KEY(product_id) REFERENCES products,
image_url VARCHAR(255),
message TEXT
);