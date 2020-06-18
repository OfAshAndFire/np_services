### This project is as of yet, unnamed

## Env File
In the root of your directory, create a .env file with the following properties
```
DB_USERNAME='yourpgusername' // the username you created for this db
DB_PASSWORD='yourpgpassword' // the password you created for this user
DB_HOST="localhost" // the domain the db is running on
DB_PORT=5432 // the port the db runs on
DB_SYNC=true // this tells the db to create tables and run migrations
```

## Setup
1) `npm install`
2) `npx sequelize db:create`
3) `npx sequelize db:migrate`

## Running Server
`npm start`

## Contributing Guidelines
* Branch from master
* Work on your branch
* Before issuing Pull Request, rebase against master to pickup changes
* Issue pull request from your branch to development, with tests
* After Code Review and approval, merge into master
* Add your name to Contributers section below on README


### Contributors
