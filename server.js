// Setup dotenv
require('dotenv').config();

// Dependencies
const express = require('express');
const cors = require('cors');
const routers = require('./routers');

// Creates express app
const app = express();

// App init
app.use(express.json());
app.use(cors());

app.use('/api', routers);

// Listens to env PORT or 3404 if not found
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on ${process.env.PORT ? process.env.PORT : 3000}`);
});

