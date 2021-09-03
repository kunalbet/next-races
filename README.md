# Next to Go Races App

This App gets the race details from a REST endpoint and ALWAYS displays the next 5 races to start in 3 different categories.
<br/>
The races are sorted in accending order to the start time. Each race is shown with acountdown timer.
<br/>
Once the timer ends the race is in stated mode. It then deletes the started races after 30 seconds of display.
<br/>
The race list then refreshes to displays the next 5 races to start.

This project was boostrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
<br/>
It also runs the express server that fetches the races at [http://localhost:4000/races/3](http://localhost:4000/races/3)

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

