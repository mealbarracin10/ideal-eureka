// Dependencies
const express = require('express')
const app = express()

// Port
// Allow use of Heroku's port or your own local port, depending on your environment
const PORT = process.env.PORT || 3000

// Middleware
// use public folder for static assets, like css
app.use(express.static('public'))

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('*', (req, res) => {
  res.status(404).json('Sorry, page not found')
})

// Listen
app.listen(PORT, ()=>{
  console.log('Listening on port: ', PORT  );
})
