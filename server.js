const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')

// Load env
dotenv.config({ path: './config.env' })

const app = express()

// Dev logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Profile routes
app.use('/api/v1/resumo', require('./routes/resumo'))

// Handle production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(__dirname + '/public'))

    // Handle SPA (single page app)
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

const port = process.env.PORT || 8011

app.listen(port, () => {
    console.log(`Servidor rodando em modo ${process.env.NODE_ENV} na porta ${port}!`)
})