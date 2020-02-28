const Express = require('express');

let app = Express();

const PORT = process.env.PORT || 3000;

const userRoute = require('./routes/User.js')

app.use('/user', userRoute);

app.listen(PORT);