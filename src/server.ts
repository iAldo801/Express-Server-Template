import express, { Request, Response } from "express";
import chalk from 'chalk';

const settings = require('../data/settings.json')
const app = express();


app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");


// ---------------------------------------------------------------------------------------------------- Routes

app.use("/", require('./routes/sections/home'))

// ----------------------------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------------------------- API's

app.use('/api/user', require('./routes/api/user'))

// ----------------------------------------------------------------------------------------------------


app.listen(settings.PORT, () => {
    console.log(chalk.green` │ 🚀 Server Loaded ⤵`);
    console.log('    └─ 🌐 http://localhost:80')
})