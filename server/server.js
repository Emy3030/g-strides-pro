import express  from 'express'
import cors     from 'cors'
import dotenv   from 'dotenv'
import mongoose from 'mongoose'
import { fileURLToPath } from 'url'
import { dirname, join }  from 'path'

import contactRoutes   from './routes/contact.js'
import { errorHandler, notFound } from './middleware/errorHandler.js'

dotenv.config()

const app  = express()
const PORT = process.env.PORT || 5000

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? 'https://yourdomain.com'
    : 'http://localhost:3000',
  credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ── Routes ────────────────────────────────────────────────────────────────────
app.get('/api/health', (_, res) => res.json({ status: 'OK', timestamp: new Date() }))
app.use('/api/contact', contactRoutes)

// ── Serve React build in production ──────────────────────────────────────────
if (process.env.NODE_ENV === 'production') {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const clientBuild = join(__dirname, '../client/dist')
  app.use(express.static(clientBuild))
  app.get('*', (_, res) => res.sendFile(join(clientBuild, 'index.html')))
}

// ── Error handlers ────────────────────────────────────────────────────────────
app.use(notFound)
app.use(errorHandler)

// ── Start server ──────────────────────────────────────────────────────────────
// async function start() {
//   try {
//     if (process.env.MONGO_URI) {
//       await mongoose.connect(process.env.MONGO_URI)
//       console.log('✅ MongoDB connected')
//     } else {
//       console.log('⚠️  MONGO_URI not set — running without database')
//     }
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on http://localhost:${PORT}`)
//     })
//   } catch (err) {
//     console.error('❌ Failed to start:', err)
//     process.exit(1)
//   }
// }
async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    })
  } catch (err) {
    console.error('❌ Failed to start:', err)
    process.exit(1)
  }
}

start()
