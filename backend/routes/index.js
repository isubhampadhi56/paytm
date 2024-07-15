const { Router } = require("express");
const userRouter = require("./user");
const adminRouter = require("./admin");
const app = new Router();

app.use("/user",userRouter);
app.use("/admin",adminRouter);
module.exports = app;

