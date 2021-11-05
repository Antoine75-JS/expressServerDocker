// Setup dotenv
require('dotenv').config();

// Dependencies
const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const routers = require('./routers');

// Creates express app
const app = express();

// Connect mongo db
mongoose.connect(
  // "mongodb://username:password@172.25.0.2:27017/?authSource=admin"

  // If service setup in docker-compose
  "mongodb://username:password@mongodb:27017/?authSource=admin"
).then(() => {
  console.log("Connected to mongo database !");
}).catch((err) => console.log(err));

// App init
app.use(express.json());
app.use(cors());

app.use('/api', routers);

// Listens to env PORT or 3404 if not found
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on ${process.env.PORT ? process.env.PORT : 3000}`);
});

