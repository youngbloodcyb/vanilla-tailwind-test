const path = require('path')

module.exports = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, "./public/index.html"))
    },

    test: (req, res) => {
        res.sendFile(path.join(__dirname, "./public/test.html"))
    }
}