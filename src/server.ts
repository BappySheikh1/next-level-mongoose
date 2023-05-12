const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = 5000


// Mongoose connect server
async function mongooseServer() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
    console.log("Database connection successful");
    
  } catch (error) {
    console.log(`Failed to connect database ${error}`);
  }
}

mongooseServer()

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})