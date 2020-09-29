# React-Redux Project
 
The purpose of this project is to build standard user authentication that can be used by anyone who is looking for ready to use user authentication for an application. It consists of two routes: home and profile as well as login, logout and registration buttons.<br />
In the frontend, React and Redux are utilized in order to accomplish well organized user data flow and to effectively manage components. Its backend is powered by Rails. The session controller is playing an important role in managing user authentication in the backend. In addition, the user model is responsible for validation and storing user information. <br />
 
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
Please cd into frontend directory to get started with the frontend appliation. The first, install all the dependencies by running command above - 'npm install.'

```shell
npm start
```
This command will start the frontend application. It automatically opens at http://localhost:3000.

### Initialize the database
```shell
rails db:create db:migrate db:seed
```

### Ruby version
```shell
ruby -v
```
Version `ruby 2.6.2`

please install the ruby version 2.6.2 if it is different:

```shell
rbenv install 2.6.2
```

## License
[MIT](https://choosealicense.com/licenses/mit/)

 


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# react-redux-project
