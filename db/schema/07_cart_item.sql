-- DROP and CREATE cart items TABLE
DROP TABLE IF EXISTS cart_items CASCADE;

CREATE TABLE cart_items (
cart_item_id SERIAL PRIMARY KEY NOT NULL,
cart_id INT,
product_id INT,
recipient_id INT,
FOREIGN KEY(cart_id) REFERENCES carts,
FOREIGN KEY(product_id) REFERENCES products,
FOREIGN KEY(recipient_id) REFERENCES recipients
);