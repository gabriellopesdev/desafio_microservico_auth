const mongoose = require('mongoose')

class Connection {
    constructor() {
        const url =
            process.env.DATABASE
            mongoose.set('useNewUrlParser', true)
            mongoose.set('useUnifiedTopology', true)
            mongoose.set('useFindAndModify', false);
            mongoose.connect(url).then(() => {
                console.log('Database connected')
            })
    }
}

module.exports = Connection