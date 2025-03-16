import express from "express";
import cors from "cors";

import createError from "http-errors";

import cookieParser from "cookie-parser";
import logger from "morgan";
import helmet from "helmet";

import chatRouter from "./routes/chat.mjs";
import crudRouter from "./routes/crud.mjs";


const PORT = process.env.PORT || 8080;
const app = express();

// view engine setup
app.set('view engine', 'jade');

app.use(cors());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/chat', chatRouter);
app.use('/crud', crudRouter);

// Reduce fingerprinting
app.disable('x-powered-by');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});