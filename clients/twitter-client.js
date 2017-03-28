'use strict';
const twitter = require('twitter');
const client = new twitter({
    consumer_key:           process.env.HUBOT_TWITTER_KEY,
    consumer_secret:        process.env.HUBOT_TWITTER_SECRET,
    access_token_key:       process.env.HUBOT_TWITTER_TOKEN,
    access_token_secret:    process.env.HUBOT_TWITTER_TOKEN_SECRET,
});

module.exports = client;