const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDetailSchema = new Schema({
    userId: {
        required: true,
        type: String
    },

    name: {
        required: true,
        type: String
    },

    email: {
        required: true,
        type: String
    },

    password: {
        required: true,
        type: String
    }

}, {collection : 'UserDetails'});

var UserDetailModel = mongoose.model('UserDetails', userDetailSchema);

var func_fetchUserDetailByUserId = function(username, callback){
    UserDetailModel.find({userId : username}, callback);
}

var func_fetchAllUserDetails = function(){
    return UserDetailModel.find({}).exec();
}

var func_registerUser = function(modelObj, callback){
    modelObj.save(callback);
}

var DocumentModelTemplate = {
    model: UserDetailModel,
    queries: {
        fetchUserDetailByUserId: func_fetchUserDetailByUserId,
        fetchAllUserDetails : func_fetchAllUserDetails,
        registerUser : func_registerUser
    }
}

module.exports = DocumentModelTemplate;