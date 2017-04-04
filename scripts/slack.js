'use strict';
require('dotenv').config();

const twitterController = require('../controllers/twitter-controller');

module.exports = function(robot) {
   twitterController.New(robot);
}
