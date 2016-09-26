const fs = require("fs")
const path = require("path")
const _ = require("lodash")

module.exports.parse = function(dir, defaults) {
    var mapToProcess = {}

    if (process.env.NODE_ENV !== 'production') {
        try {
            const devFaults = JSON.parse(fs.readFileSync(dir))
            mapToProcess = Object.assign({}, defaults, devFaults)
        } catch (e) {
            // ignore
        }
    } else {
        mapToProcess = defaults
    }

    _.forEach(mapToProcess, function(value, key) {
        process.env[key] = value
    })
}