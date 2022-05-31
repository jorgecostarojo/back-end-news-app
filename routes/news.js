const { Router } = require("express");
const router = Router();
const createNewHandler = require('../handlers/newsHandlers/createNewHandler')
const getNewHandler = require('../handlers/newsHandlers/getNewsHandler')
const archiveNewHandler = require('../handlers/newsHandlers/archiveNewHandler')


router.get('/get_all', async (req, res) => {

    const response = await getNewHandler()

    res.json(response)
})

router.post('/create', async (req, res) => {
    try {
        const body = req.body
        await createNewHandler(body);
        res.json(200)

    } catch (e) {
        console.log(e);
        res.json(500)
    }
})

router.post('/archive', async (req, res) => {

    try {
        const _id = req.body._id
        await archiveNewHandler(_id);
        res.json(200)

    } catch (e) {
        res.json(500)
    }


})

module.exports = router;
