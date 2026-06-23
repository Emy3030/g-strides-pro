# G-Strides Technology — Portfolio Website

A full-stack portfolio website for Emperor Emeka, Founder of G-Strides Technology.
Built with **React + Vite + Tailwind CSS v4** (frontend) and **Express + MongoDB** (backend).

---

## 📁 Project Structure

```
g-strides-portfolio/
│
├── client/                        # React frontend (Vite)
│   ├── public/
│   ├── src/
│   │   ├── assets/images/         # All SVG assets & photos
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   ├── Hero/
│   │   │   ├── About/
│   │   │   ├── Portfolio/
│   │   │   ├── Services/
│   │   │   ├── Testimonials/
│   │   │   ├── Technologies/
│   │   │   ├── Articles/
│   │   │   ├── Contact/
│   │   │   └── Footer/
│   │   ├── data/index.js          # All site content & image paths
│   │   ├── pages/Home.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
└── server/                        # Express backend
    ├── controllers/
    ├── routes/
    ├── models/
    ├── middleware/
    ├── server.js
    └── .env                       # ← fill in your credentials
```

---

## 🚀 Quick Start

### 1. Install frontend dependencies

```bash
cd client
npm install
npm run dev         # → http://localhost:3000
```

### 2. Install backend dependencies

```bash
cd server
npm install
# Edit .env with your MongoDB URI and email credentials
npm run dev         # → http://localhost:5000
```

---

## 🛠 Tech Stack

| Layer     | Technology                                       |
|-----------|--------------------------------------------------|
| Frontend  | React 18, Vite, Tailwind CSS v4, Framer Motion   |
| Routing   | React Router DOM v6                              |
| HTTP      | Axios                                            |
| Slider    | Swiper.js                                        |
| Icons     | React Icons                                      |
| Backend   | Express.js, Node.js                              |
| Database  | MongoDB + Mongoose                               |
| Email     | Nodemailer (Gmail)                               |

---

## 🖼 Replacing Placeholder Images

All SVG placeholders are in `client/src/assets/images/`.

To replace with real photos:
1. Add your `.jpg` / `.png` / `.webp` images to `client/src/assets/images/`
2. Update the paths in `client/src/data/index.js` under the `IMAGES` object

Key images to replace:
- `hero_photo.svg` → Your professional photo (pointing pose)
- `about_photo.svg` → Your professional photo (standing)
- `contact_photo.svg` → Your photo for the contact section
- `logo.svg` → Your brand logo
- Project thumbnails → Screenshots of real projects

---

## ✉️ Contact Form Setup

1. Open `server/.env`
2. Set `EMAIL_USER` to your Gmail address
3. Set `EMAIL_PASS` to a [Gmail App Password](https://support.google.com/accounts/answer/185833)
4. Set `EMAIL_TO` to where you want enquiries sent
5. Set `MONGO_URI` to your MongoDB connection string

---

## 📦 Build for Production

```bash
# Build frontend
cd client && npm run build

# Start server (serves built frontend + API)
cd server
NODE_ENV=production npm start
```

---

## 🎨 Customisation

- **Content**: Edit `client/src/data/index.js` — change your name, stats, projects, testimonials etc.
- **Colors**: Edit CSS variables in `client/src/index.css` under `:root`
- **Fonts**: Currently using *Plus Jakarta Sans* — change the Google Fonts link in `client/index.html`
