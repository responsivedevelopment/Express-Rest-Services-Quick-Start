To install this app:
1. First install node js https://nodejs.org/en/download/ AND GIT https://git-scm.com/downloads.
2. In command prompt or terminal run the command: git clone https://github.com/responsivedevelopment/Express-Rest-Services-Quick-Start
3. In command prompt or terminal go to the root of the folder: cd Express-Rest-Services-Quick-Start
4. Run this command to install dependencies: npm install

To run this app: 
1. In command prompt or terminal go to the root of the folder: cd Express-Rest-Services-Quick-Start
2. Run this command to start the server: node server

Go to: http://locahost:9090/api/data    to test and make sure its running!

Now edit your app.js file in the project https://github.com/responsivedevelopment/UI-Grid-Quickstart 
where it says:  url = 'data.json';

Change it to:  url = 'http://localhost:9090/api/data';

