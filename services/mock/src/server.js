const AppController = require('./app')

const app = new AppController().express

app.listen(process.env.PORT || 3001, () => {
    console.log(`server listening on ${process.env.PORT || 3001}`)
})