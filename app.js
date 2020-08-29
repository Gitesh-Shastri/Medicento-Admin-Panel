const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

const app = express();

const {mongoDbUrl, port} = require('./config/configuration')

/* Configuring Express And Ejs */
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

/* Configuring Mongoose to Connext To Database */
mongoose.connect(mongoDbUrl, 
                    {useNewUrlParser: true})
                    .then(response => {
                        console.log('Database Connected Successfully');
                    })
                    .catch( err => {
                        console.log('Database Connection Failed');
                    });



/*  Routes */
const defaultRoutes = require('./routes/default');
app.use('/', defaultRoutes);

app.listen(port, function () {
    console.log(`listening on ${port}`);
});