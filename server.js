const express = require('express')

var app = express()

app.get('/', (req, res) => {
    // res.send('<h1>Welcome to EDA</h1>')
    res.send({
        name:'Ali',
        likes: [
            'football',
            'food'

        ]
    })
})

app.get('/about', (req, res) => {
    res.send('About our company')
})

app.get('/bad', (req,res) => {
    res.send({
        errorMessage: 'Unable to handle requesr'
    })
})

app.listen(3000)