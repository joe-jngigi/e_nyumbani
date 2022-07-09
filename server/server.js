const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();
// listen port.
const PORT = process.env.PORT || 5000;
// connect db
connectDB();

//  view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// handle error middleware
// error middleware
app.use(errorHandler);
// routes
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/users", require("./routes/usersRoute"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.listen(PORT, () => {
  console.log(`server running on : http://localhost:${PORT}`.blue);
});
