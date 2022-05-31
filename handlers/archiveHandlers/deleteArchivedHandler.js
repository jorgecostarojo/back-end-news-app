const { ObjectId } = require('mongodb');
const databaseConection = require('../../connections/databaseConnection')

const deleteArchivedHandler = async(_id) => {
    console.log('DELETE')

    const db = await databaseConection.GetConection();

    const archivedDeleted = await db.collection('news').findOneAndDelete({"_id": ObjectId(_id)});
    
}

module.exports = deleteArchivedHandler;