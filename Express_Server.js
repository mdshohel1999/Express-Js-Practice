const express = require('express')
const app = express()
const PORT = 3000

//* Http Method

app.get('/', (req, res)=>{
    res.status(200).send('<h1>This is express js</h1>')
})

app.listen(PORT, ()=>{
    console.log(`Server is Running at htttp://localhost : ${PORT}`);
})