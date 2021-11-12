# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Mastermind game
A web application allows the user to play mastermind game against the computer.

About the project
A learning project to build web application that fulfills the logic of mastermind game.
Built With
The application built with:

React.js
MUI

Getting Started

Prerequisites
npm
npm install npm@latest -g

Installation

Clone the repo

### `git clone https://github.com/Khrystynka/Mastermind.git`

Install NPM packages

### `npm install`

In the project directory, you can run:

### `npm start`

This runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view the game in the browser.
Usage
The application might be use to play mastermind game. The user can select one of difficulty levels:
Easy
Meduim and
Hard
The user tries to guess the number combination genereted by computer. At the end of each guess attempt the comsputer provides the feedback how many right numbers and in the right positions the user guessed, and how many right numbers but in the wrong positions he guessed. If the user guesses the number combination within the set amount of guesses he wins the game.

Project structure
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The application code consists of two main parts: UI and logic. The UI part is bilt using React and Material Ui to reuse existing components from their library. The game state and game logic part is centralized using redux store and reducers. The idea was to make UI and game state and logic implementation independent from each other and all the interactions are done only through action despathcing and state subscriptions. UI component dispatches actions beased on user's interactions with the UI, for.ex. start the game, process the user's guess. and subscribes to state changes. For eample when user presses the "Guess" button in the InputList component, it dispatches the action, game logic than processes the guess, updates the state. The new state is then propagated to all the components that need to update the view, like list of guesses or number of guesses left.
This separation of cncerns has another benefit that game logic can be reused when the UI changes. For example it can be used in React Native Application.Another benefit it that game logic can be changed independently from the UI. E.g. with current implementation game state is stored completely on the client but this implementation can be changes independently from the UI, and be managed remotely on the server.
