const databaseConection = require('../../connections/databaseConnection')

const createNewHandler = async(body) => {
    
    const db = await databaseConection.GetConection();
    const document = {
        title:body.title,
        description:body.description,
        content:body.content,
        author:body.author,
        date: new Date(),
        archivedDate: null
    }

    const res = await db.collection("news").insertOne(document)

    return res;
    
}

module.exports = createNewHandler;