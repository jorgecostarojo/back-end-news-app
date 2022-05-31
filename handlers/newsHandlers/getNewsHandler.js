const databaseConection = require('../../connections/databaseConnection')

const getNewsHandler = async() => {

    const db = await databaseConection.GetConection();

    const news = await db.collection("news").find({"archivedDate": {$eq: null}}).sort({date: -1}).toArray()

    return news;
    
}

module.exports = getNewsHandler;