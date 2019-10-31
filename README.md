# FrontEndUnitTests
Practicing installing and using Jasmine, Karma, and Istanbul for an AngularJS project

To get project running:
In a terminal window
-- Clone the repo
-- npm install
-- in a new terminal window start grunt type "grunt" this will copy all front end files out of the "client" directory and into a "server" directory. Grunt will contintue to run and will watch for changes to the client files, and will automatically copy them into the server directory.
-- in another new terminal window start the server by typing "npm start"
-- nav to http://localhost:5000/ for your app
-- create .gitignore with:
  .gitignore
  node_modules/
  server/public/

-- to run karama, navigate to the karma config directory (client/scripts/tests) and type "karma start"
  
