const express = require('express');
const bodyParser = require('body-parser');
require('./db/conn');
const device = require('./routes/routes');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.disable('etag');

const PORT = process.env.PORT || 8081;

app.use('/api', device);

app.listen(PORT, () => {
   
    console.log(`Server is running on PORT ${PORT}`);
});