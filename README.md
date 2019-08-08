#server_mail

#You need to have npm or yarn install globally and node:

https://yarnpkg.com/fr/docs/install#debian-stable
https://www.npmjs.com/get-npm
https://nodejs.org/en/download/

#Open your bash and type :

npm install or yarn install

#Create a .env file and copy paste thess lines

_USER='your email adress'
_PASS='your email password'
 SERV= your_email_services

#To connect a mysql database add these line to .env and uncomment const connection in index.js

DB_USERNAME= 'your mysql username'
DB_PASSWORD='your mysql password'
DB_DATABASE='your database name'
DB_HOST='your database host'

#Launch server by typing 

node index.js

Enjoy !
# server_mail
