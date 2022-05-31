require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const URL = process.env.URI
const DATABASE_NAME = "app"

const DbConnection = function () {

    let client = null;

    async function DbConnect() {
        try {
            console.log('DB Connect');
            var _client = new MongoClient(URL);
            await _client.connect();

            return _client
        } catch (e) {
            console.log('ERRROR: ', e);

            return null;
        }
    }

    async function Get() {
        try {
            if (client != null) {
                return client.db(DATABASE_NAME);
            } else {
                client = await DbConnect();

                return client.db(DATABASE_NAME);
            }
        } catch (e) {
            return e;
        }
    }

    return {
        GetConection: Get,
    }
}

module.exports = DbConnection();