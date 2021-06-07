import express from "express";

import {formatResponse} from "../utils/format.js";

const router = express.Router();

let tweets = [];

router.get('/',(req, res) =>{
  const {username} = req.query;

  if(username){
    const userTweets = tweets.filter(tweet => tweet.username === username);
    return res.status(200).json(formatResponse(userTweets,null));
  }
  
  res.status(200).json(formatResponse(tweets,null));
});

router.get('/:id', (req, res)=>{
  const {id} = req.params;
  
  if(isNaN(Number(id))){
    return res.sendStatus(400);
  }

  const tweet = tweets.filter(tweets => tweets.id === id)[0];
  if(!tweet){
    return res.sendStatus(404);
  }

  res.status(200).json(formatResponse(tweet,null));
});

router.post('/', (req, res) => {
  const {body} = req;

  const id = String(tweets.length + 1);
  const username = body?.username;
  const text = body?.text;
  const name = body?.name;

  if(username && text && name){
    tweets.push({id,...body});
  }

  res.status(201).json(formatResponse(tweets, null));

});

router.put('/:id',(req, res)=>{
  const {id} = req.params;
  const {body} = req;
  
  if(isNaN(Number(id))){
    return res.sendStatus(400);
  }

  const tweetIndex = tweets.findIndex(tweet => tweet.id === id);

  if(tweetIndex < 0){
    return res.sendStatus(404);
  }
  
  const tweet = tweets.splice(tweetIndex,1);
  tweets = [{...tweet[0],...body}, ...tweets];

  
  res.status(201).json(formatResponse(tweets, null));
});

router.delete('/:id',(req, res)=>{
  const {id} = req.params;
  
  if(isNaN(Number(id))){
    return res.sendStatus(400);
  }

  const tweetIndex = tweets.findIndex(tweet => tweet.id === id);

  if(tweetIndex < 0){
    return res.sendStatus(404);
  }
  
  const deleted = tweets.splice(tweetIndex,1);
  
  res.status(200).json(formatResponse(deleted, null));
});


export default router;