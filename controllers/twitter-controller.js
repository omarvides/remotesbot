'use strict';

const twitterClient = require('../clients/twitter-client');
const params = { screen_name: 'nodejs' };

module.exports.new = function (res) {
    const array = res.message.text.split(" ");
    if (array.length > 2) {
      getTweets(res, array[2]);
    }
    else {
      getTweets(res);
    }
};

function getTweets(res, criteria) {
  twitterClient.get('statuses/home_timeline', params, function(err, tweets, response) {
      if (err) {
          console.log(err);
          return res.send('Sorry an error ocurred');
      }

      if (criteria) {
        tweets = tweets.filter(getFilter(criteria));
      }
      if (tweets.length > 0) {
        const randomnumber = Math.floor(Math.random() * (tweets.length - 1));
        res.send(`Here is one ${tweets[randomnumber].text}`);
        return res.send(`I found ${tweets.length} tweets related to \`${criteria}\` remote jobs`);
      }

      return res.send(`Found ${tweets.length} jobs matching the search criteria: \`${criteria}\``);

  });
}

function getFilter(criteria) {
  return function filter(tweet) {
    if (tweet.text.indexOf(criteria) >= 0 ) {
      return true;
    }
    return false;
  }
}
