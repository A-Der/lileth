import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
  'title': String,
  'date': String,
  'description': String,
  'image': String
}, { timestamps: true })
const Event = mongoose.model('event', eventSchema)

export default Event