const env = process.env.NODE_ENV; // 'dev' or 'test'

const dev = {
    app: {
        port: 3000
    },
    db: {
        host: 'localhost',
        port: 27017,
        name: 'NewsPage'
    }
}; 
 
const uat = {
    app: {
        port: 3000
    },
    db: {
        username : 'heroku_h87g3q4k',
        password:'pa50ahap86im8hpf7ci046j3u1',
        host: 'ds113853.mlab.com',
        port: 13853,
        name: 'heroku_h87g3q4k'
    }
};

const config = {
    dev,
    uat
};

module.exports = config['uat'];