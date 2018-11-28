// Dependencies
const express = require('express')
const app = express()

// Port
// Allow use of Heroku's port or your own local port, depending on your environment
const PORT = process.env.PORT || 3000

const filePathOptions = {
  root: __dirname + '/public/'
}
// use public folder for static assets, like css
app.use(express.static('dist'))

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('*', (req, res) => {
  res.sendFile('index.html', filePathOptions, (err) => {
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
