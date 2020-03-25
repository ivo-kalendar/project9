
const express = require('express')
const app = express()

const webpack = require('webpack')
const config = require('../config/webpack.dev.js')
const compiler = webpack(config)

const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler)


app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use('/', require('./router'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(webpackDevMiddleware(compiler, config.devServer))
app.use(webpackHotMiddleware)
app.use(express.static('./dist'))


const PORT = process.env.PORT || 7788
app.listen(PORT, () => console.log(`Server started on port ${PORT}...`))