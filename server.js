// Dependencies
const express = require('express')
const app = express()

// Port
// Allow use of Heroku's port or your own local port, depending on your environment
const PORT = process.env.PORT || 3000

// Middleware

const filePathOptions = {
  root: __dirname + '/dist/'
}
// use public folder for static assets, like css
app.use(express.static('public'))

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('*', (req, res) => {
  res.sendFile('index.html', filePathOptions, ()=>{
    if (err){
      next(err)
    } else {
      console.log('Sent');
    }
  })
})

// Listen
app.listen(PORT, ()=>{
  console.log('Listening on port: ', PORT  );
})
