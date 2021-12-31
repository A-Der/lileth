import express from 'express'
import { getEvents, createEvent, updateEvent, deleteEvent } from '../controllers/events.js'
import cloudinary from '../utils/cloudinary.js'
import upload from '../utils/multer.js'
import Event from '../models/event.js'

const router = express.Router()
router.get('/', getEvents)
router.post('/', createEvent)

router.post('/upload', upload.single('image'), async(req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path)

    const event = new Event({
      title: req.body.title,
      date: req.body.date,
      description: req.body.description,
      image: result.secure_url,
      cloudinary_id: result.public_id
    })
    await event.save()
    res.json(event)

  } catch (err) {
    console.log(err)
  }
})

router.put('/:id', updateEvent)
router.delete('/:id', deleteEvent)

export default router