import * as dotenv from "dotenv";
dotenv.config();
import createError, { HttpError } from "http-errors";
import express, { Response, Request, NextFunction } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose from "mongoose";
import { config } from "./config/config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

const router = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4500 },
})
  .then(({ url }) => console.log(`Apollo Server running on port ${url}`))
  .catch((error) => console.log("error", error));

/****  CONNECT TO MONGOOSE   ***/

const app = express();
// const PASSWORD = process?.env?.MONGO_PASSWORD as string;
// const MONGO_URL = process.env.MONGO_URL as string;

const DB = process.env.MONGO_URI as string;
mongoose
  .connect(DB)
  .then(() => {
    console.log("Server Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

// view engine setup
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (
  err: createError.HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
