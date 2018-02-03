var Twitter = require('twitter');
var config = require('./../../config/twitter-config');

var client = new Twitter(config);

function sendTweet(message) {
    client.post('statuses/update', { status: message}, function (error, tweet, response) {
        if (error) {
            // TODO use api error
        };
        console.log(tweet);
    });

}

module.exports = { sendTweet };