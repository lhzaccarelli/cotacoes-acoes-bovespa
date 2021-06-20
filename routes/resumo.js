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
                symbols: `${codigo}.sa`, //.sa para funcionar com o Yahoo Finance
                region: 'BR'
            },
            headers: {
                'x-rapidapi-key': process.env.API_KEY,
                'x-rapidapi-host': process.env.API_HOST,
            }
        }

        axios.request(options)
        .then(response => {
            res.header({
                'Access-Control-Allow-Origin' : '*', //CORS
            })
            
            const result = response.data.quoteResponse.result

            if (result.length > 0) {
                // OK - 200 response
                res.json(result)
            } else {
                // Ação encontrada
                res.status(404).send(`Ação com o código ${codigo} não foi encontrada!`)
            }
        })
        .catch(error => {
            console.error(error)
            res.status(500).json({
                message: 'Erro realizando a requisição.'
            })
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: 'Erro no servidor'
        })
    }
})

module.exports = router