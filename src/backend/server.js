
const express = require('express')
const app = express()

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use('/', require('./router'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('./dist'))


const PORT = process.env.PORT || 7788
app.listen(PORT, () => console.log(`Server started on port ${PORT}...`))