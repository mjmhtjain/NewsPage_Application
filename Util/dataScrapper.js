const request = require('request');
const cheerio = require('cheerio');

var titleScraper = function(url, callback){
    // let url = 'https://www.amazon.in/';
    request(url, callback);
}

module.exports.titleScraper = titleScraper;