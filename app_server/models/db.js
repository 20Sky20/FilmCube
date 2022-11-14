const mongoose = require('mongoose');
// const dbURI = 'mongodb://localhost/FilmCube';
const dbURI = 'mongodb+srv://skylerE20:Santtej20@cluster0.edvdkdw.mongodb.net/test';
mongoose.connect(dbURI, {useNewUrlParser: true});

const readLine = require ('readline');
if (process.platform === 'win32'){
    const rl = readLine.createInterface ({
        input: process.stdin,
        output: process.stdout
    });
    rl.on ('SIGINT', ()=> {
        process.emit ("SIGINT")
    });
}

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log('Mongoose disconnected through ${msg}');
        callback();
    });
};

process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.on('SIGINT', () =>{
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});

process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () =>{
    console.log('Mongoose disconnected');
});


require('./comments')