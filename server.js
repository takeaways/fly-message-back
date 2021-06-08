import express from "express";

import connectMiddleware from "./middleware.js";
import tweetsRouter from "./routers/tweet.js";

const app = express();
connectMiddleware(app);

app.use('/tweets', tweetsRouter);


app.use((req, res)=>{
  res.sendStatus(404);
});
app.use( (err, req, res,) => {
  console.error(err.stack);
  res.sendStatus(500);
});
export default app;