const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");
const routes = require("./routes/router");

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

const port = process.env.PORT || 4000;

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
};
mongoose
  .connect(process.env.DB_URI, dbOptions)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.use("/", routes);

const server = app.listen(port, () => {
  console.log("Server is running");
});
