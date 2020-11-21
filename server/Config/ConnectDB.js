const mongoose = require('mongoose');
const config = require('config');

const db = config.get('Mongo-URI');

const ConnectDB = () => {
  mongoose.connect(
    db,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
    (err) => {
      err
        ? console.log('Eroor', err)
        : console.log('connected to the DataBase');
    }
  );
};
module.exports = ConnectDB;
