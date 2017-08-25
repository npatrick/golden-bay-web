## Documentation for golden-bay-web

This app runs on Node.js, please install the recommended stable version from the official site. Then, take the following instructions to get started. 

### Development Stage
Download all packages: 
```sh
npm install
```
Run webpack: 
```sh
npm run bundle
```
Then, run the server: 
```sh
npm start
```
Check the web app @: http://localhost:3000

### Deployment Stage

Take all the build from the master branch to the deploy branch
```sh
git push origin master:deploy
```
The deploy branch is already set up to make updates to the official website hosted on heroku. Once the changes are detected by heroku and started rebuilding the app, check the app here: http://www.goldenbayhealthllc.com 
