const { v4: uuid } = require('uuid')
const writeData = require('../utilities/writeData')
const readData = require('../utilities/readData.js')

function formatUrl(url) {
    //this allows the program to work in any cases (using http:// or not)
    const parts = url.split('://')
    if (parts.length == 1) return parts[0]
    if (parts.length == 2) return parts[1]
}
const urlsController = {
    shortUrl: function shortUrl(req, res) {
        try {
            let { url } = req.body
            const newUrl = formatUrl(url)
            let data = {}
            const code = uuid().substring(0, 4)
            data[code] = newUrl
            writeData(data)
            res.status(200).send(`https://node-shorter.onrender.com/${code}`)
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