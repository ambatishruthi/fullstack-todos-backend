const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/ToDoRoute');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log('Database connection error:', err.message));

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
