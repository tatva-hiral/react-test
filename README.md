## React Test App

This is the test application to show the user listing. This applicatin is built with React Hooks, Material UI and Redux.

## Quickstart

To run this application locally, follow below commands:

Install node modules:
`yarn install`

To run the application in browser:
`yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To build the application, run below command
`yarn build`

Builds the app for production to the `build` folder.

## Screenshot

User list

![Alt text](/docs/uselist.png?raw=true "User list")

## Folder structure

```
└───src
    │   App.js
    │   index.js
    │   serviceWorker.js
    │
    ├───actions
    │       user.js
    │
    ├───assets
    │   └───images
    │           index.js
    │           logo.svg
    │           preview.jpg
    │
    ├───components
    │   ├───Navbar
    │   │       index.js
    │   │       navbar.css
    │   │
    │   └───Paginator
    │           index.js
    │
    ├───constants
    │       actions.js
    │       index.js
    │
    ├───containers
    │   └───UserList
    │           index.js
    │           styles.js
    │           UserList.js
    │
    ├───reducers
    │       index.js
    │       userReducer.js
    │
    ├───routes
    │       index.js
    │
    ├───store
    │       index.js
    │
    └───utils
            history.js
			
```			