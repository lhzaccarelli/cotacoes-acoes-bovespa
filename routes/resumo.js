const express = require('express')
const router = express.Router()
const axios = require('axios').default

// /api/v1/resumo
router.get('/:codigo', async (req, res) => {
    try {
        const { codigo } = req.params

        const options = {
            method: 'GET',
            url: `${process.env.API_URL}/get-quotes`,
            params: {
                symbols: codigo,
                region: 'BR'
            },
            headers: {
                'x-rapidapi-key': process.env.API_KEY,
                'x-rapidapi-host': process.env.API_HOST,
            }
        }

        axios.request(options)
        .then(response => {
            console.log(response.data.quoteResponse.result)
            // // Original response (200) as JSON
            // res.json(data)
        })
        .catch(error => console.error(error))

        res.end()
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

module.exports = router