const fs = require("fs")
const path = require("path")
const _ = require("lodash")

module.exports.parse = function(dir, defaults) {
    if (process.env.NODE_ENV !== 'production') {
        try {
            const devFaults = JSON.parse(fs.readFileSync(dir))
            const mapToProcess = Object.assign({}, defaults, devFaults)

            _.forEach(mapToProcess, function(value, key) {
                process.env[key] = value
            })
        } catch (e) {
            // ignore
        }
    }
}