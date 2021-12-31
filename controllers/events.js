import Event from '../models/event.js'

export const createEvent = async (req, res) => {
  try {
    const event = new Event(req.body)
    await event.save()
    res.status(201).json(event)
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find()
    res.status(200).json(events)
  } catch (error) {
    res.status(400).json({ success: false, error }) 
  }
}
export const updateEvent = async (req, res) => {
  const allowedOptions = ['title', 'date', 'description']
  const selectedOption = Object.keys(req.body)
  const doesExists = selectedOption.every(option => allowedOptions.includes(option))
  if (!doesExists) {
    const error = 'error'
    return res.status(404).json({ success: false, error })
  }
  try {
    const post = await Event.findById({ _id: req.params.id })
    selectedOption.forEach(option => post[option] = req.body[option])
    await post.save()
    res.status(200).json(post)
  } catch (error) {
    res.status(404).json({ success: false, error })
  }
}
export const deleteEvent = async (req, res) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const event = await Event.findOneAndDelete({ _id: req.params.id })
    res.status(200).json('Event was deleted')
  } catch (error) {
    res.status(404).json({ success: false, error })
  }
}