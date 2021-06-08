import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

const middleware = (app) => {
  app.use(helmet());
  app.use(morgan('tiny'));
  app.use(cookieParser());
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({extended:false}));
  app.use(express.static("public"));
};

export default middleware;