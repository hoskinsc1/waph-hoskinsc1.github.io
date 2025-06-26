# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Note: the `gh-pages` branch is the deployed website. You can update this deployment by running the command `npm run deploy`

## Tree Strucutre of Repo

```bash
├── package.json // has the React installed deps
├── package-lock.json // is a lock versioned of package.json
├── public // things that are public on webpage
│   ├── favicon.ico
│   ├── imgs
│   │   ├── employee_picture.png
│   │   └── headshot.png
│   ├── index.css // style file shared by index and waph.html
│   ├── index.html // main site html, majority of stuff here
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── plainJs // the scripts from lab 2
│   │   ├── email.js
│   │   └── jquery-3.7.1.min.js
│   ├── robots.txt
│   └── waph.html // html for waph site
├── README.md // this
└── src // files for everything react
    ├── css // style / logo things here
    │   ├── App.css
    │   ├── bootstrap
    │   │   └── bootstrap_custom.scss // custom bootstrap style launch
    │   ├── index.css
    │   ├── logo.svg
    │   └── RandomVerse.css // css for bible verse section
    ├── index.js // loads react things into index.html
    └── js // javascript portion done in react
        ├── BibleVerses.js // cycles through the components/randomVerse
        └── components
            └── RandomVerse.js // gets public api to get bible verse and format it into a react component
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
