# React-Redux Project
 
The purpose of this project is to build standard user authentication that can be used by anyone who is looking for ready to use user authentication for an application. It consists of two routes: home and profile as well as login, logout and registration buttons.<br />
In the frontend, React and Redux are utilized in order to accomplish well organized user data flow and to effectively manage components. Its backend is powered by Rails. The session controller is playing an important role in managing user authentication in the backend. In addition, the user model is responsible for validation and storing user information. <br />
 
## Install

### Clone the repository

```shell
https://github.com/batsaikhan84/react-project-frontend.git
cd react-proejct-frontend
```

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Install dependencies

Using NPM

```shell
npm install
```

In order to avoid conflict with the frontend app that opens at http://localhost:3000 in the development mode  , choose backend application port at 3001:

```shell
rails s -p 3001
```

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### please refer to backend application

https://github.com/batsaikhan84/react-project-backend.git

## License
[MIT](https://choosealicense.com/licenses/mit/)
