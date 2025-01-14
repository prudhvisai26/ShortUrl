const express = require("express");
const shortUrl = require("./routes/shortUrl");
const homeRoute = require("./routes/home");
const createDB = require("./config/db");

const app = express();
const PORT = 3000;

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.use("/", homeRoute);
app.use("/urlapi", shortUrl);

createDB.sync().then(() => {
  console.log("DB is Running!!");
});

app.listen(PORT, () => {
  console.log("Server started running Successfully at PORT: ", PORT);
});
