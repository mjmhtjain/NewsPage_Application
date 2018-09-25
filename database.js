const config = require('./config');
let dbConfig = config.db;

let connectionString = '';
if(dbConfig.hasOwnProperty('username') && dbConfig.hasOwnProperty('password')){
    let username = dbConfig.username;
    let password = dbConfig.password;
    let host = dbConfig.host;
    let port = dbConfig.port;
    let name = dbConfig.name;
    connectionString = `mongodb://${username}:${password}@${host}:${port}/${name}`;
}else{
    let host = dbConfig.host;
    let port = dbConfig.port;
    let name = dbConfig.name;
    connectionString = `mongodb://${host}:${port}/${name}`;
}

console.log(connectionString);

module.exports = {
    database: connectionString
}