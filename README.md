# Fashion Trader

A dynamic end-to-end web application that enables a community of fashion lovers to buy and sell new and gently-worn items. 

___

## Overview

Fashion Trader is a dynamic web application using front end and back end technologies. Users can register an account, post items they would like to sell, and browse the items that other users have posted for sale. It's part marketplace, part social platform. Users are able to input various details about the items they would like to sell, including the desired price, and then post those items on the site. Other users can then load and browse the items in the Shop.

___

## Demo

To use Fashion Trader, navigate to the depolyed Heroku page [here](https://project-02-2019.herokuapp.com/). Simply click the links to create an account, fill out the account form, and begin!

___

## Run Fashion Trader Locally

### Setup
To run Fashion Trader, you will need to install both [MySQL](https://dev.mysql.com/doc/refman/5.6/en/installing.html) and [Node.js](https://nodejs.org/en/download/). 

### MySQL Database Setup 
Once MySQL is installed, you will be able to create the *fashion_trader* database using the SQL file [db/schema.sql](schema.sql) located in this repository. Run this code inside your MySQL client (e.g. [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)) to create your local database. You will need to create a `.env` file with both a `SEQUELIZE_USER` and `SEQUELIZE_PASSWORD` variable that match your MySQL Workbench credentials, as well as `ADMIN_USER_PWD` and `USER_PWD` variables so that you can log in as the "seed" users. You will then be ready to proceed with running Fashion Trader.

### Running Fashion Trader

Once you have the database and `.env` file set up, run these commands in the command line:

```
git clone git@github.com:jeff-swanner/Project-02.git
cd Project-02
npm install
```

The required dependencies will be installed, and you will be ready to run the application from the command line. You will need to open the `server.js` file and configure the `PORT` variable on line 9 to the value of your choice. For example:

```
export PORT = 8080
```

Afterwards, you will need to initialize the server using Node.js.

```
node server.js
```

The application will now be running locally on your specified `PORT`. In this example, it will be running on PORT 8080. You will be able to access the application from your web browser at the URL [http://localhost:8080](http://localhost:8080).

___

## Technologies Used

* HTML5
* Fomantic UI (A community-forked version of Semantic UI) (CSS)
* Javascript
* JQuery
* NPM Packages for deployment and development:
    - BCrypt
    - Chai
    - Cookie-Parser
    - DotENV
    - ESLint
    - [Express](https://www.npmjs.com/package/express)
    - [Handlebars](https://www.npmjs.com/package/express-handlebars)
    - Mocha
    - [Moment.js](https://www.npmjs.com/package/moment)
    - [MySQL2](https://www.npmjs.com/package/mysql2)
    - Passport
    - [Sequelize](https://www.npmjs.com/package/sequelize)
    - Travis CI (for build checks)

___

## Directory structure

Fashion Trader follows the MVC software design pattern for file structure. The directory structure is outlined below.

```
├── config
│   ├── connection.js
│   └── passport.js
│ 
├── controllers
│   ├── appController.js
│   └── authController.js
│
├── db
│   ├── schema.sql
│   ├── seed.sql
│   └── seed.js
|
├── models
│   ├── index.js
│   ├── item.js
|   ├── session.js
|   └── user.js
|
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── style.css
│       ├── img 
│       │   └── image files used
│       └── js
│           ├── app.js
│           ├── items.js
|           └── shop.js
|
├── routes
|   ├── apiRoutes.js
|   └── htmlRoutes.js
|
├── server.js
│
└── views
    ├── dashboard.handlebars
    ├── item.handlebars
    ├── profile.handlebars
    ├── register.handlebars
    ├── shop.handlebars
    ├── layouts
    |   └── main.handlebars
    └── partials
        ├── footer
        |   └── footer-block.handlebars
        ├── modal
        |   └──login-block.handlebars
        └── nav
            └──nav-block.handlebars
```

## Contributing
To contribute to this application:
1. Fork the repo
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'add my-new-feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

___

#### Developers
* [Krishti Bhowmick](https://github.com/krishb09)
* [Jeff Swanner](https://github.com/jeff-swanner)
* [Jason Whited](https://github.com/jsnwhited)
* [Frank Zachary](https://github.com/fzachary)
