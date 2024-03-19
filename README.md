## Installation
- ```npm install```
- ```docker-compose up``` (run database)
- ```npm start``` (run server + migrations)
- ```npm run db:seed``` (run seeds)
 
default env file - .env.example

## Swagger documentation
http://localhost:3000/api

## Default users in database
```
{
    id: '554f244e-2eed-4225-8ceb-1cb3231bab23',
    name: 'User1',
    email: 'user1@gmail.com',
    password: 'password1',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
},
{
    id: '3b58992a-1171-4f66-a784-c1c8d660333f',
    name: 'User2',
    email: 'user2@gmail.com',
    password: 'password2',
    createdAt: '2024-02-02',
    updatedAt: '2024-02-02',
},
```
