const { v4: uuid } = require('uuid')
const writeData = require('../utilities/writeData')
const readData = require('../utilities/readData.js')

const urlsController = {
    shortUrl: function shortUrl(req, res) {
        try {
            const { url } = req.body
            let data = {}
            data[uuid().substring(0, 4)] = url
            writeData(data)
            res.status(200).send(data)
        } catch (err) {
            console.log('Error saving ulr:', err)
            res.status(500).send()
        }
    },
    redirect: function redirect(req, res) {
        const { code } = req.params
        const db = readData()
        res.redirect("http://" + db[code])
    }
}

module.exports = urlsController