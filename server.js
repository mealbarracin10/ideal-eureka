// Dependencies
const express = require('express')
const app = express()

// Port
// Allow use of Heroku's port or your own local port, depending on your environment
const PORT = process.env.PORT || 3000

const filePathOptions = {
  root: 'https://warm-garden-59874.herokuapp.com/'
}
// use public folder for static assets, like css
app.use(express.static('dist'))

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('*', (req, res) => {
  res.sendFile('index.html', filePathOptions, (err) => {
    if (err){
      console.log(__dirname, err);
    } else {
      console.log('Sent', __dirname);
    }
  })
})

// Listen
app.listen(PORT, ()=>{
  console.log('Listening on port: ', PORT  );
})
