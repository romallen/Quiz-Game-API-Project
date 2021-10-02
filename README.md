This was created during my time as a student at Code Chrysalis

# API SOLO PROJECT
# QUIZ GAME


Table of contents

Introduction
Usage
Endpoints
License


INTRODUCTION
This is a CRUD API service for a quiz game using Express, Node JS, Prisma &amp; Postgres.

USAGE
The API is hosted on Heroku. It can be access from the link below.
https://ccp2-quiz-api.herokuapp.com/


It provides crud functionalities for both a single questions and for multiple questions. There is also an option to seed the database with same questions.

All data being sent to the database should be included in the data section of the HTTP request and should be in a valid JSON format.

The database is a single table call `Question`. Below is the model used to create its schema.

`model Question {
  question_id  String    @id @default(uuid())
  question  String @db.VarChar(255) @unique 
  answer  String @db.VarChar(255)
  category  String    @db.VarChar(100) 
  points  Int
  difficulty  Int
}`



Endpoints 
`/api/test`: checks that the server is running.
`/api/seed`: seed the database with 25 questions.

CREATE
POST    `/api/question`: create a single entry in the database. Requires the HTTP request's body to has the same fields as the database.
POST    `/api/questions`: create a multiple entries in the database. Requires the HTTP request's body to have the entries wrapped in an array.

GET     `/api/question`: retrieves the first entry from the database that matches the query. Requires the HTTP request's body to have a JSON with atleast one field from the database.
GET     `/api/questions`: retrieves a multiple entries from the database. It returns all entries that matches the query provided in the body.

PATCH   `/api/question`: updates a single entry from the database. Requires the HTTP request's body to have two objects. The first is the entry that should be updated. The second is what the field should be updated to.
PATCH   `/api/questions`: updates a multiple entries from the database. The first is the entries that should be updated. The second is what the field should be updated to.

DELETE  `/api/question`: deletes a single entry from the database. 
DELETE  `/api/questions`: deletes a multiple entries from the database. If no body is sent with the HTTP request it will delete all entries from the table.

