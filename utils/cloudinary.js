import cloudinary from 'cloudinary'
import dotenv from 'dotenv'
dotenv.config()

cloudinary.config({
  cloud_name: process.env.APP_NAME,
  api_key: process.env.APP_API_KEY,
  api_secret: process.env.APP_API_SECRET
})

export default cloudinary