--TABLE CREATION QUERYS--

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email_address" VARCHAR (80) UNIQUE NOT NULL
    );
    
    CREATE TABLE "child_data" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL,
    "image" VARCHAR (1000),
    "age" INT NOT NULL,
    "user_ID" INT
    );
    
     CREATE TABLE "event_data" (
    "id" SERIAL PRIMARY KEY,
    "event_type" VARCHAR (80) NOT NULL,
    "child_ID" INT,
    "date" DATE NOT NULL,
    "time" TIME(0) NOT NULL
    );
    
  CREATE TABLE "goal_data" (
    "id" SERIAL PRIMARY KEY,
    "prize_name" VARCHAR (80) NOT NULL,
    "prize_image" VARCHAR (1000) ,
    "max_goal" INT NOT NULL,
    "current_goal" INT DEFAULT '0',
    "child_ID" INT,
    "timestamp" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    
    
 --- Sample query reuests ---   
 INSERT INTO "user" ( "username", "password", "email_address")
 VALUES ('test', 'test123', 'test123@gmail.com');
 
 INSERT INTO "child_data" (
    "name",
    "image", 
    "age",
    "user_ID")
    VALUES ('bobby', 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Bundesarchiv_Bild_183-76052-0335%2C_Schacholympiade%2C_Tal_%28UdSSR%29_gegen_Fischer_%28USA%29_Crop.jpg', '13', '1');
    
 INSERT INTO "event_data" (
    "event_type",
    "child_ID",
    "date",
    "time"
    )
    VALUES ('dry diaper','1', '2020-10-13', '11:23:00');
    
    INSERT INTO "goal_data" (
    "prize_name",
    "prize_image",
    "max_goal",
    "child_ID"
    )
    
    VALUES ('Jojo bow','https://s7d9.scene7.com/is/image/JCPenney/07e306b0-7404-11e8-bd88-6b37ea83f19a?resmode=sharp2&op_sharpen=1&wid=550&hei=550', '10','1');
    
    
    ---Join queries---
    
    SELECT * FROM "user"
    JOIN "child_data" on "user"."id" = "child_data"."user_ID"
    JOIN "event_data" ON "child_data"."id" = "event_data"."child_ID"
    JOIN "goal_data" ON "goal_data"."child_ID" = "event_data"."child_ID";
    
    
        ---trying now() function for events---
 INSERT INTO "event_data" (
    "event_type",
    "child_ID",
    "date",
    "time"
    )
    VALUES ('dry diaper','1', now(), now());
    
   