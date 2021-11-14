# Mastermind game

A web application that allows to play mastermind game against the computer.

## About the project

A learning project to build web application that implements the logic of mastermind game.

## Built With

This application is built with:

- [React.js](https://reactjs.org/)

- [MUI](https://mui.com/)

## Getting Started

### Installation

Clone the repo

```
git clone https://github.com/Khrystynka/Mastermind.git
```

Use the package manager [npm](https://www.npmjs.com/) to install all dependencies.

```bash
npm install
```

In the project directory, run:

```
npm start
```

This runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view the game in the browser.

## Usage

The application is for playing mastermind game. The main idea of the game isto trt to to guess the number combination genereted by computer. At the end of each guess attempt the computer provides the feedback on how many numbers are on their correct positions and how many correct numbers but in the wrong positions were guessed. If the user guesses the number combination within the set amount of guesses and/or time they win the game.

### Additional features:

- The user can select one of three difficulty levels. The length of the combination, number of choices and number of attempts depend on the selected level.

- The user's total score is saved on the device's local storage and is displayed
- On the highest difficulty level a countdown timer is added for the entire game.

# Project structure

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The application code consists of two main parts: UI and game logic.

The UI part is built using [React.js](https://reactjs.org/) and [Material UI](https://mui.com/) (to reuse existing UI components.)

The game state and game logic part are centralized using Redux Store and Reducers. The idea was to make game state and logic implementation independent from the UI so that all the interactions are done only through action dispatching and state subscriptions. UI components dispatche actions based on the user's interactions (e.g. start a game, process the user's guess) and subscribes to state changes. For example, when the "Guess" button is pressed in the InputList component, it dispatches the addGuess action, game logic then processes the guess and updates the state. The new state is then propagated to all components that need to update the view, like the list of guesses and component that displays the number of guesses left.
This separation of concerns has another benefit - game logic can be reused when UI changes. For example, it can be used in React Native application. Another advantage is that game logic can be replaced easily. Currently the game state is stored completely on the client, but this implementation can be changed independently from the UI - and the state canbe managed remotely on a server.

Game logic and some UI components are tested by unit tests written using [jest](https://facebook.github.io/jest/) and [react-testing-library](https://testing-library.com/react) libraries.
