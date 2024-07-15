const { Router} = require('express');
const {jwtValidate} = require('../middleware');
const {getBalance,transferBalance} = require("../controller/account")

const app = new Router();
app.use(jwtValidate);

app.get("/balance",getBalance);
app.post("/transfer",transferBalance)

module.exports = app;