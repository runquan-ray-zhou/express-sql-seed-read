DROP DATABASE IF EXISTS colors_prod_gmeb;
CREATE DATABASE colors_prod_gmeb;

\c colors_prod_gmeb;

CREATE TABLE colors (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    is_favorite BOOLEAN
);