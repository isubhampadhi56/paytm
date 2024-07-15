const express = require("express");
require("dotenv").config();
const cors = require("cors");
const rootRouter = require("./routes/index");
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1",rootRouter);
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});


