'use strict';
const twitterClient = require('../clients/twitter-client');
const nodeStream = twitterClient.stream('user');
const topic = ['go', 'golang', 'node', 'javascript', 'nodejs', 'devops', 'part time', 'parttime', 'freelance', 'full stack', 'fullstack'];
const exclude = ['bigdata', 'europe', 'php']

module.exports.New = function(robot) {
  nodeStream.on('data', function(event) {
    let shouldSend = false;
    topic.forEach(function(topic) {
        if(event.text.toLowerCase().indexOf(topic.toLowerCase()) >= 0) {
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
};
