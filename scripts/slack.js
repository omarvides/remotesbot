'use strict';
require('dotenv').config();

// const twitterController = require('../controllers/twitter-controller');
const twitterClient = require('../clients/twitter-client');
const filters = ['go', 'golang', 'node', 'javascript', 'nodejs', 'devops', 'part time', 'parttime', 'freelance', 'full stack', 'fullstack'];
const exclude = ['bigdata', 'europe', 'php']

module.exports = function(robot) {
    // robot.hear(/(#)?sendremote(s)?(.*)|(remote(s)?\?)/, twitterController.new);
    const nodeStream = twitterClient.stream('user');

    nodeStream.on('data', function(event) {
      let shouldSend = false;
      filters.forEach(function(filter) {
          if(event.text.toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
             shouldSend = true;
          }
      });
      exclude.forEach(function(exclude) {
        if(event.text.toLowerCase().indexOf(exclude.toLowerCase()) >= 0) {
           shouldSend = false;
        }
      });
      if (shouldSend) {
        robot.send({ room: process.env.DEFAULT_CHANNEL }, event.text);
      }
    });
    nodeStream.on('error', function(err) {
        throw err;
    });
}
