# Vue CLI updated to work with Heroku

[VERY IMPORTANT check if you have vue version 3](https://cli.vuejs.org/guide/installation.html)

`vue —version`

`npm uninstall` [if needed](https://cli.vuejs.org/guide/installation.html)

check to make sure you have node 8.9 or higher `node —version` <br>
update/upgrade if needed

optional, install and use yarn. https://yarnpkg.com/en/docs/install#mac-stable

### create a new project

`vue create new_project` - follow prompts, choose standard/recommended options
`cd new_project`

`touch server.js`

`npm install express` or `yarn add express`

optional:
`vue add router`
`vue add vuex`

**server.js**

```js
// Dependencies
const express = require('express')
const app = express()

// Port
// Allow use of Heroku's port or your own local port, depending on your environment
const PORT = process.env.PORT || 3000

// use public folder for static assets, like css
app.use(express.static('dist'))

app.use(express.urlencoded({extended:false}))
app.use(express.json())

// Listen
app.listen(PORT, ()=>{
  console.log('Listening on port: ', PORT  );
})
```

update `package.json` - careful to keep it as valid json!

add start and heroku-postbuild in scripts

heroku also recommends adding your version of node under engines

**package.json**

```js
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "start": "node server.js",
    "heroku-postbuild": "npm run build"
  },
  "engines": {
    "node": "10.11.0"
  },
```

**start** - tells heroku what to run in order to start the server

**heroku-postbuild** - runs the build scripts to compile your vue components 

**Note:** you can now run your vue app with `node server.js` on localhost:3000 but it doesn’t have any of the dev features and it won’t be representative of what is on heroku. Also if you want to see changes you have to remember to run `npm run build` every time you want to see a change. So it’s better to just use `yarn serve` or `npm run serve` - just know that heroku is using it. 


See the default app deployed with a couple of minor updates (done for the purpose to check that builds were working/updating)

https://warm-garden-59874.herokuapp.com/



## From original Readme:

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
