const express = require('express')

const PORT = 3000

const app = express()

app.use(express.json())
app.use('/api', (req,body) => {
    console.log(req.body)
})

htmlBody = '<h1>asd</h1>'

app.get('/',(req,res) => {
    res.send(htmlBody)
})

app.listen(PORT, () =>  console.log(`server started on port ${PORT}.`))
