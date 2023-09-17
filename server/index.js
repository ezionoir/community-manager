const express = require("express");
const morgan = require('morgan');
const cors = require('cors'); //avoid cors error
const cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');
const router = require('./router')
const app = express();
const path = require('path')
require("dotenv").config();
require('./controller/DatabaseController').connect(process.env.MONGODB_URI)
// app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
// cookieParser middleware
app.use(cookieParser())

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json({limit:"50mb"}));
app.use(morgan('combined'));
app.use(cors());  //avoid "cors" error

app.use("/api",router);


// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});