import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import page from './routes/page.js'

const app = express()
app.use(express.json())
app.use(cors())

dotenv.config()

const port = process.env.SERVER_PORT
const mongourl = process.env.DBURL

mongoose.connect(mongourl).then(client =>{
    app.listen(port, (e) => {
        console.log(port)
    })
}).catch(() => {
    console.log('Database Connection Error')
})

app.get('/', (req,res)=>{
    res.status(200).json({response: "ok"})
})

app.use('/page', page)
