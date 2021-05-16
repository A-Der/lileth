import express from 'express'
import postRoutes from './routes/posts.js'
import cors from 'cors'
import './db/db.js'

const app = express()
app.use(express.json())
app.use(cors())
app.use('/posts', postRoutes)
app.listen(8000)