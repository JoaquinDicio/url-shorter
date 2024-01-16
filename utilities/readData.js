const fs = require("node:fs")

function readData() {
    try {
        const data = fs.readFileSync('./db/data.json', 'utf8')
        return JSON.parse(data)
    } catch (err) {
        console.log(err)
    }
}

module.exports = readData