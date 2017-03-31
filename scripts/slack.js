'use strict';
require('dotenv').config();

const twitterController = require('../controllers/twitter-controller');

module.exports = function(robot) {
    robot.hear(/(#)?sendremote(s)?(.*)|(remote(s)?\?)/, twitterController.new);
}
