import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import tweetsRouter from "./routers/tweet.js";

const app = express();


app.use(helmet());
app.use(morgan('combined'));
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));

app.use('/tweets', tweetsRouter);


app.use( (err, req, res,) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
export default app;