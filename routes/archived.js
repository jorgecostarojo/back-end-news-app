const { Router } = require("express");
const router = Router();
const deleteArchivedHandler = require("../handlers/archiveHandlers/deleteArchivedHandler");
const getArchivedHandler = require('../handlers/archiveHandlers/getArchivedHandler')



router.get('/get_all', async (req, res) => {

    const response = await getArchivedHandler();

    res.json(response)
})

router.delete('/delete', async (req, res) => {
    try {
        const _id = req.body._id

        await deleteArchivedHandler(_id)
        res.json(200)

    } catch (e) {
        res.json(500)
    }

})

module.exports = router;