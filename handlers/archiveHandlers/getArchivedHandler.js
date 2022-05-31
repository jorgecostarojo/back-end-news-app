const databaseConection = require('../../connections/databaseConnection')

const getArchivedHandler = async() => {
    const db = await databaseConection.GetConection();
    
    const archived = await db.collection("news").find({"archivedDate": {$ne: null}}).sort({archivedDate: -1}).toArray()
    
    return archived;
    
}

module.exports = getArchivedHandler;