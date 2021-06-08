let tweets = [
  {
    id: '1',
    text: '드림코더분들 화이팅!',
    createdAt: Date.now().toString(),
    name: 'Bob',
    username: 'bob',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
  {
    id: '2',
    text: '안뇽!',
    createdAt: Date.now().toString(),
    name: 'Ellie',
    username: 'ellie',
  },
];

export function getAllTweets(){
  return tweets;
}

export function getAllTweetsByUsername(username){
  return tweets.filter((tweet) => tweet.username === username);
}

export function getTweetById(id){
  return tweets.find((tweet) => tweet.id === id);
}

export function deleteTweet(id){
  const newTweets = tweets.filter(item => item.id !== id);
  tweets = newTweets;
  return tweets;
}

export function createTweet(body){
  tweets.push(body);
  return tweets;
}

