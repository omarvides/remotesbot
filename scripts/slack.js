//  Description:
//  This bot listens to remote resources, currently:
//  - Slack
// 

require('dotenv').config()
const twitter = require('twitter');

module.exports = function(robot) {

    const params = { screen_name: 'nodejs' };
    const client = new twitter({
        consumer_key:           process.env.HUBOT_TWITTER_KEY,
        consumer_secret:        process.env.HUBOT_TWITTER_SECRET,
        access_token_key:       process.env.HUBOT_TWITTER_TOKEN,
        access_token_secret:    process.env.HUBOT_TWITTER_TOKEN_SECRET,
    });
    
    robot.hear(/(#)?sendremote(s)?|(remote(s)?\?)/, function (res) {
        client.get('statuses/home_timeline', params, function(error, tweets, response) {
            if (!error) {
                var randomnumber = Math.floor(Math.random() * (tweets.length - 1));
                res.send(`Here is one ${tweets[randomnumber].text}, ${tweets[randomnumber].url}`);
                res.send(`I found ${tweets.length} tweets related to remote jobs`);
            } else {
                console.log(error);
                return res.send('Sorry an error ocurred');
            }
            
        });
    });
}