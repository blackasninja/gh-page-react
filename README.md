# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### Start
```
yarn start
```

### Github setup example
```
git remote add origin https://github.com/TomerPacific/starter-project

git push --set-upstream origin master
```

### Add GH Page
```
yarn add gh-pages
```

### Added scripts
```
    "predeploy": "npm run build", <----------- #1
    "deploy": "gh-pages -d build", <---------- #2
```

### Deploy
```
npm run deploy
```


### Link used 
https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/