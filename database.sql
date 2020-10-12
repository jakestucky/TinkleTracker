
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "pet" (
    "id" SERIAL PRIMARY KEY,
    "firstname" VARCHAR (80) UNIQUE NOT NULL,
    "user_id" INT REFERENCES "user"
);

INSERT INTO "user" ("username", "password", "authLevel")
VALUES ('petLover76', '$2a$10$s90NWQOLD96j9EogiBa3gOG/OKb9UKVE53K4i5qWPra0Jeg0pp51e', 'USER');
-- pw = unicorn123

INSERT INTO "pet" ("firstname", "user_id")
VALUES ('Fido', 1), ('Snowball', 1);