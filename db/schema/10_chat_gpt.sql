-- DROP and CREATE product to chat GPT TABLE
DROP TABLE IF EXISTS chat_gpt CASCADE;

CREATE TABLE chat_gpt (
chat_gpt_id SERIAL PRIMARY KEY NOT NULL,
card_design_id INT,
FOREIGN KEY(card_design_id) REFERENCES card_designs,
occasion VARCHAR(255),
modified_date TIMESTAMP DEFAULT NOW(),
mood VARCHAR(255),
final_prompt TEXT,
prose_style VARCHAR(255),
themes VARCHAR(255)
);