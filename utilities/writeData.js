const readData = require('./readData.js')
const fs = require('node:fs')

async function writeFile(newData) {
    //merge old and new data
    const oldData = readData()
    const newDb = { ...oldData, ...newData }
    //write changes
    try {
        fs.writeFileSync('./db/data.json', JSON.stringify(newDb))
    } catch (err) {
        console.log('Error writing db', err)
    }
}

module.exports = writeFile