// Setup dotenv
require('dotenv').config();

// Dependencies
const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const routers = require('./routers');
const { MONGO_IP, MONGO_PORT } = require('./config/config');

// Creates express app
const app = express();

// Connect mongo db
const mongoUrl = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to mongo database !"))
  .catch((err) => console.log(err));

// App init
app.use(express.json());
app.use(cors());

app.use('/api', routers);

// Listens to env PORT or 3404 if not found
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on ${process.env.PORT ? process.env.PORT : 3000}`);
});

