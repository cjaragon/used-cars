const express = require('express')
const app = express()
const cars = require('../cars.json')

app.get('/api/cars', (req, res) => res.status(200).send(cars) )


app.use(express.json())

const port = 4040
app.listen(port, () => {
    console.log(`Server is running in port ${port}`)
}) 