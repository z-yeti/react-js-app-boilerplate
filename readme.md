# zYeti's React JS App Boilerplate

## Basic React JS app boilerplate built with:

### [React.js](https://github.com/facebook/react/)

### [Next.js](https://github.com/zeit/next.js)

### [Express](https://github.com/expressjs/express)

### [MobX](https://github.com/mobxjs/mobx)

### [Firebase](https://firebase.google.com/docs/?authuser=0)

### [Styled Components](https://github.com/styled-components/styled-components)

### Node v8.9.0 (use nvm)

# Project Setup

- ### Clone this repo
- ### `cd /react-js-app-boilerplate`
- ### `git checkout with-firebase-auth-db`
- ### `nvm use`
- ### `yarn`
- ### `cp .env.example .env`

# Firebase Setup

- ### Go to the [Firebase Console](https://console.firebase.google.com/)
- ### Create a project
- ### Firebase -> Authentication -> Web Setup
- ### Copy creds over to the your .env file.
- ### Firebase -> Authentication -> Sign In Method -> Enable Email/Password and save
- ### Firebase -> Database -> Create Realtime Database -> Start In Test Mode
- ### `yarn dev`
- ### Sign up and go back to your firebase console and you will see it has stored your new user and created a database entry.
