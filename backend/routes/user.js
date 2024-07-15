const { Router } = require('express');
const { signup,login,updateUser,findUser } = require('../controller/user');
const {jwtValidate} = require('../middleware');
const app = Router();
app.post('/signin', login);

app.post("/signup", signup);

app.put("/update", jwtValidate, updateUser);

app.get("/bulk",jwtValidate, findUser);

module.exports = app;