const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const BookRoutes = require('./routes/books');



// Middleware
app.use(bodyParser.json());

// ROUTES
app.use('/books', BookRoutes)



// PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server is listening on port ${PORT} ...`))

