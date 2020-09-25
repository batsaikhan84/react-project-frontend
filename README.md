# React-Redux Project
 
The purpose of this project is to build standard user authentication that can be used by anyone who is looking for ready to use user authentication for an application.
It consists of two routes: home and profile as well as login, logout and registration buttons. 
Its backend is powered by Rails and in the frontend, React and Redux are utilized in order to accomplish well organized user data flow to manage components effectively.
In the backend, the session controller is playing an important role in managing user authentication. In addition, the user model is responsible for validation and storing user information. 
 

# Installation
 
Run bundle install command in backend directory and npm install command in frontend directory to get started with the application. Npm start command will start the frontend application. It will automatically open at http://localhost:3000. Due to port 3000 being used for frontend, port 3001 may be used for backend applications to run. In order to accomplish it, type 'rails s -p 3001' in the command line. It is necessary to run migration after cloning the application to a local machine.