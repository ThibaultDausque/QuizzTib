-- CREATE TABLE "message" (
--     Message_ID SERIAL PRIMARY KEY,
--     User_Firstname VARCHAR(50),
--     User_Surname VARCHAR(50),
--     User_Email VARCHAR(100),
--     Message_Title VARCHAR(100),
--     Message_Text VARCHAR(400),
--     Message_Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

CREATE TABLE "quizz" (
    id INT PRIMARY KEY,
    title VARCHAR(50),
    score VARCHAR(50),
    question_id INT,
    is_correct BOOLEAN
);

CREATE TABLE "questions" (
    id INT PRIMARY KEY,
    question TEXT NOT NULL,
    quiz_id INT,
    is_correct BOOLEAN,
    FOREIGN KEY (quiz_id) REFERENCES quizz(id)
);

CREATE TABLE "user" (
    id INT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    user_mail VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    quiz_id INT,
    FOREIGN KEY (quiz_id) REFERENCES quizz(id)
);