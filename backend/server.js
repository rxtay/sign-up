const express = require('express');
const app = express();
const routes = require('./routes/routes');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
dotenv.config();

//Connnect MongoDB
mongoose.connect(process.env.MONGO_URI, () => {
    console.log(`MongoDB Connected`);
})

app.use(cors());

//Body-parser
app.use(express.json());

//Load router
app.use('/app', routes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})