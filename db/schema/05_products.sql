-- DROP and CREATE products TABLE
DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
product_id SERIAL PRIMARY KEY NOT NULL,
image_url VARCHAR(255) NOT NULL,
name VARCHAR(255) NOT NULL,
latin_name VARCHAR(255),
description TEXT,
intended_for TEXT,
temp VARCHAR(255),
water VARCHAR(255),
height VARCHAR(255),
sun VARCHAR(255),
sun_description TEXT,
water_description TEXT,
price_in_cents INT NOT NULL,
inventory INT NOT NULL,
modified_date TIMESTAMP NOT NULL DEFAULT NOW()
);