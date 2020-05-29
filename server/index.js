const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://kam237zasada:hotelcopernicus@cluster0-ft0e8.mongodb.net/test?retryWrites=true&w=majority', { useFindAndModify: false })
    .then (() => console.log("Connected.."))
    .catch (err => console.error(err));

app.use(express.json());