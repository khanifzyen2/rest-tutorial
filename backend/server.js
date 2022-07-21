const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const colors = require("colors");
const connectDb = require("./config/db.js");
const { errorHandler } = require("./middleware/errorMiddleware.js");

connectDb();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goal/", require("./routes/goalRoutes.js"));
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
