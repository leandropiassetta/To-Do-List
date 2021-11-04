const { MongoClient } = require('mongodb');

const OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };

const MONGO_DB_URL = 'mongodb://localhost:27017/Ebyrt';

const DB_NAME = 'Ebryt';

const connection = () => MongoClient.connect(MONGO_DB_URL, OPTIONS)
.then((conn) => conn.db(DB_NAME));

module.exports = connection; 