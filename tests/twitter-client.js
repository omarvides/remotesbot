'use strict';

const expect = require('chai').expect;
const util = require('util');
const envHelper = require('./helpers/env-helper')();
const twitterClient = require('../clients/twitter-client');

describe('Twitter client', function(){ 

    it('should return a twitter client as object', function() {
        expect(twitterClient).to.be.an.object;
        expect(twitterClient.options.consumer_key).to.be.defined;
        expect(twitterClient.options.consumer_secret).to.be.defined;
        expect(twitterClient.options.access_token_key).to.be.defined;
        expect(twitterClient.options.access_token_secret).to.be.defined;
        expect(twitterClient.request).to.be.a.function;
    });
})