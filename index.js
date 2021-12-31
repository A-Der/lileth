// import express from 'express'
// import postRoutes from './routes/posts.js'
// import cors from 'cors'
// import './db/db.js'

// const app = express()
// app.use(express.json())
// app.use(cors())
// app.use('/posts', postRoutes)
// app.listen(8000)

// import express from 'express'
// import cors from 'cors'
// import './db/db.js'
import express from 'express'
// import devPostRoutes from './routes/devPosts.js'
import postRoutes from './routes/posts.js'
import eventRoutes from './routes/events.js'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
// import './db/db.js'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use('/events', eventRoutes)
app.use('/devPosts', postRoutes)
// mongoose.connect('mongodb+srv://testUser:test123@cluster0.fk6bs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { 
//   useNewUrlParser: true, 
//   useCreateIndex: true, 
//   useUnifiedTopology: true
//  }, () => {app.listen(8000, () => console.log(`8000 👍`))})
// To get rid of all those semi-annoying Mongoose deprecation warnings.
const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
}
// const DB_URL = 'mongodb+srv://A-Der:Empirewonder8138*@cluster0.5xcvr.mongodb.net/spirit?retryWrites=true&w=majority'
const PORT = 8000
// Connecting the database and then starting the app.
mongoose.connect(process.env.MONGO_DB_URI, options, () => {
  app.listen(PORT, () => console.log(`${PORT, process.env.MONGO_DB_URI} 👍`))
})
// The most likely reason connecting the database would error out is because 
// Mongo has not been started in a separate terminal.
// .catch(err => console.log(err))