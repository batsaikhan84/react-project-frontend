React-Redux Project
 
This project is standard user authentication. Its backend is powered by Rails and in the frontend, React and Redux are utilized in order to accomplish well organized user data flow.
In the backend, the session controller is playing an important role in managing user authentication.
 
Installation
 
Use bundle install command in backend directory and npm install command in frontend directory to get started with the application. You can start your frontend application with npm start command. It is necessary to run migration after cloning to a local machine (rails db:migrate). It will automatically open at http://localhost:3000. Due to port 3000 being used for frontend, port 3001 may be used for backend applications to run. In order to accomplish it, type 'rails s -p 3001' in the command line.


