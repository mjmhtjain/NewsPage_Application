const request = require('request');
const cheerio = require('cheerio');

var titleScraper = function(url){
    // let url = 'https://www.amazon.in/';
    request(url, function(err, response, html){
        if(!err){ 
            let $ = cheerio.load(html);
            $('title').filter(function(){
                let data = $(this);
                // console.log(data.text());
                return data.text();
            });
        }else{
            console.log(err);
            return '';
        }
    });
}

module.export = titleScraper;