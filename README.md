# bets-task

## Easy way:
Make sure that ports 5433, 4000, 3000 are free 

And then run command

``docker compose up``

After few moments try visit 

``http://localhost:4000``

## Not so easy way:
Set node version to 20 (nvm use)

### 1 Run database 

``docker compose up db -d`` 

### 2 Change directory to backend 

Install dependencies 
``npm install `` 

Run app 
``npm run dev `` 


### 3 Change directory for frontend 
Install dependencies 
``npm install ``


Start app 
``npm start ``