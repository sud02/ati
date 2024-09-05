const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;


mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')  
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
