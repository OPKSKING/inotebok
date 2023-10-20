const browserify = require('browserify-zlib')
module.exports = {
    resolve: {
        fallback: { "zlib": false }
    }
}
