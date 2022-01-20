const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;

// pre-route middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// routes
//require('./routes')(app);

const server = app.listen(port, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Server listening on port ${port}`);
    }
});
module.exports = server;