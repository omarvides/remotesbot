'use strict';

const twitterClient = require('../clients/twitter-client');
const params = { screen_name: 'nodejs' };

module.exports.new = function (res) {
    twitterClient.get('statuses/home_timeline', params, function(err, tweets, response) {
        if (err) {
            console.log(err);
            return res.send('Sorry an error ocurred');
        } 
        console.log('No error');
        const randomnumber = Math.floor(Math.random() * (tweets.length - 1));
        res.send(`Here is one ${tweets[randomnumber].text}`);
        return res.send(`I found ${tweets.length} tweets related to remote jobs`);
        
    });
};