# React-Redux Project
 
The purpose of this project is to build standard user authentication that can be used by anyone who is looking for ready to use user authentication for an application.<br />
It consists of two routes: home and profile as well as login, logout and registration buttons.<br />
Its backend is powered by Rails and in the frontend, React and Redux are utilized in order to accomplish well organized user data flow to manage components effectively.<br />
In the backend, the session controller is playing an important role in managing user authentication. In addition, the user model is responsible for validation and storing user information. <br />
 
## Install

### Clone the repository

```shell
https://github.com/batsaikhan84/react-redux-project.git
cd react-redux-project
```
### Install dependencies

Using Bundler and NPM

```shell
bundle install
npm install
```
Please cd into backend directory to run bundle install. In order to avoid conflict with the frontend app that opens at http://localhost:3000 in the development mode  , choose port 3001:
```shell
rails s -p 3001
```
Please cd into frontend directory to get started with the frontend appliation. The first, install all the dependencies by running the following code.

```shell
npm start
```
command will start the frontend application. It will automatically open at http://localhost:3000.

### Initialize the database
```shell
rails db:create db:migrate db:seed
```

### Ruby version
```shell
ruby -v
```
Version `ruby 2.6.2`

Does not match Ruby version? Please install the right ruby version:

```shell
rbenv install 2.6.2
```

## License
[MIT](https://choosealicense.com/licenses/mit/)

 
