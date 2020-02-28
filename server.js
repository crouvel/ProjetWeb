const Express = require('express');

let app = Express();

const userRoute = require('./routes/User.js')

app.use('/user', userRoute);

app.listen(3000);