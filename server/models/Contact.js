import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema(
  {
    name:    { type: String, required: true, trim: true },
    email:   { type: String, required: true, trim: true, lowercase: true },
    service: { type: String, default: '' },
    budget:  { type: String, default: '' },
    message: { type: String, required: true },
    read:    { type: Boolean, default: false },
  },
  { timestamps: true }
)

export default mongoose.model('Contact', contactSchema)
