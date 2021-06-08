import express from 'express';
import 'express-async-errors';

import * as tweetRepository from "../data/tweet.js";

const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get('/', (req, res) => {
  const username = req.query.username;
  const data = username
    ? tweetRepository.getAllTweetsByUsername(username)
    : tweetRepository.getAllTweets();
  res.status(200).json(data);
});

// GET /tweets/:id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const tweet = tweetRepository.getTweetById(id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});

// POST /tweeets
router.post('/', (req, res) => {
  const { text, name, username } = req.body;
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  res.status(201).json(tweetRepository.createTweet(tweet));
});

// PUT /tweets/:id
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweetRepository.getAllTweets().find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});

// DELETE /tweets/:id
router.delete('/:id', (req, res) => {
  tweetRepository.deleteTweet(req.params.id);
  res.sendStatus(204);
});

export default router;
