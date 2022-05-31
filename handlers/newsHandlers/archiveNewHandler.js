const { ObjectId } = require('mongodb');
const databaseConection = require('../../connections/databaseConnection')

const archiveNewHandler = async(_id) => {
    const db = await databaseConection.GetConection();
    const newToArchive = await db.collection('news').findOneAndUpdate({"_id": ObjectId(_id)},{
        $set: {
            "archivedDate": new Date()
        }
    })
    return newToArchive;
    
}

module.exports = archiveNewHandler;