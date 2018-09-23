const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsArticleSchema = new Schema({
    title: {
        required: true,
        type: String
    },

    URL: {
        required: true,
        type: String
    },

    clicks: {
        required: true,
        type: Number
    }

}, {collection : 'NewsArticles'});

var newsArticleModel = mongoose.model('NewsArticles', newsArticleSchema);

var func_fetchAllNewsArticles  = function(callback){
    newsArticleModel.find({}, callback);
}

var func_persistNewsArticle  = function(newsObject, callback){
    newsObject.save(callback);
}

var DocumentModelTemplate = {
    model: newsArticleModel,
    queries: {
        fetchAllNewsArticles: func_fetchAllNewsArticles,
        persistNewsArticle : func_persistNewsArticle
    }
}
module.exports = DocumentModelTemplate;