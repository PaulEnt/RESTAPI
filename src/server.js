require("./db/connection"); //runs database connection immediately
const express = require("express");
const cors = require("cors")
const userRouter = require("./user/routes");
const app = express();
app.use(cors());

//add relevant routes and controllers to app before listen runs
app.use(express.json()); //tell entire server that it will always receive json, and to always send back json
app.use(userRouter);

app.listen(5001, () => {
  console.log("Listening on port 5001");
});
