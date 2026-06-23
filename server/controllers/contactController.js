import nodemailer from 'nodemailer'
import Contact    from '../models/Contact.js'

export async function submitContact(req, res) {
  try {
    const { name, email, service, budget, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email and message are required.' })
    }

    // Save to DB
    const contact = await Contact.create({ name, email, service, budget, message })

    // Send email notification (optional — only if env vars set)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
      })

      await transporter.sendMail({
        from:    `"G-Strides Portfolio" <${process.env.EMAIL_USER}>`,
        to:      process.env.EMAIL_TO || process.env.EMAIL_USER,
        subject: `New Enquiry from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service || 'Not specified'}</p>
          <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      })
    }

    res.status(201).json({ success: true, message: 'Message received!', id: contact._id })
  } catch (err) {
    console.error('Contact error:', err)
    res.status(500).json({ error: 'Server error. Please try again.' })
  }
}

export async function getContacts(req, res) {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json(contacts)
  } catch (err) {
    res.status(500).json({ error: 'Server error.' })
  }
}
