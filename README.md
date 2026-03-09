# Magician Parth Website

Professional service-based website for magic entertainment services with full-stack implementation.

## 🚀 Quick Start

### 1. Install Dependencies
```cmd
npm run install-all
```

### 2. Configure Environment
Copy `.env.example` to `.env` and update with your settings:
- MongoDB URI
- Email credentials (for contact form)

### 3. Start MongoDB
Use local MongoDB or MongoDB Atlas (free cloud database)

### 4. Seed Database (Optional)
```cmd
node server/seed.js
```
Adds sample services and blog posts.

### 5. Run Development Server
```cmd
npm run dev
```
- Frontend: http://localhost:3000
- Backend: http://localhost:5001

## 📸 Add Images

Place these images in `client/public/images/`:

**Essential (3):**
- `hero-bg.jpg` - Home page hero (1920x1080px)
- `about-magician.jpg` - About page (800x800px)
- `magician-performance.jpg` - Home page (800x600px)

**Optional (6):**
- `service-corporate.jpg`, `service-party.jpg`, `service-wedding.jpg`, `service-virtual.jpg` (800x600px)
- `blog-1.jpg`, `blog-2.jpg` (800x500px)

Download free images from:
- Unsplash: https://unsplash.com
- Pexels: https://www.pexels.com

## 🚀 Deployment

### Option 1: Vercel + Railway (Free)
1. Push to GitHub
2. Deploy frontend to Vercel
3. Deploy backend to Railway
4. Add MongoDB Atlas (free tier)

### Option 2: Heroku
```bash
heroku create your-app-name
heroku addons:create mongolab
git push heroku main
```

### Option 3: DigitalOcean
- Create droplet
- Install Node.js & MongoDB
- Use PM2 for process management
- Set up Nginx reverse proxy

## 📁 Project Structure

```
├── client/                 # React frontend
│   ├── public/
│   │   └── images/        # Website images
│   └── src/
│       ├── components/    # Reusable components
│       ├── pages/         # Page components
│       └── App.js
├── server/                # Express backend
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   └── index.js
├── .env                  # Environment variables
└── package.json
```

## ✨ Features

- 5 Complete Pages (Home, About, Services, Blog, Contact)
- Working contact form with database
- Blog system with MongoDB
- Service listings with detail pages
- Testimonials & FAQ sections
- Fully mobile responsive
- SEO optimized
- Fast loading

## 🛠️ Tech Stack

**Frontend:** React 18, React Router, Axios  
**Backend:** Node.js, Express  
**Database:** MongoDB with Mongoose  
**Email:** Nodemailer  

## 📝 Customization

- **Colors:** Edit CSS variables in `client/src/index.css`
- **Content:** Update components in `client/src/pages/`
- **Contact Info:** Edit `client/src/pages/Contact.js` and `client/src/components/Footer.js`
- **Services/Blogs:** Manage via MongoDB database

## 🚀 Deployment

See `DEPLOYMENT-GUIDE.md` for detailed deployment instructions.

**Quick Options:**
- Vercel (Frontend) + Railway (Backend) - FREE
- Heroku - $7/month
- DigitalOcean - $5/month

## 📧 Email Setup

For contact form to send emails:
1. Use Gmail SMTP or other email service
2. Update `.env` with email credentials
3. For Gmail, use App Password (not regular password)

## 🔒 Security

- Never commit `.env` file
- Use strong MongoDB passwords
- Keep dependencies updated
- Enable CORS only for your domain in production

## 📚 Documentation

- `README.md` - Complete project documentation
- `.env.example` - Environment variables template

## 🆘 Troubleshooting

**Contact form not working?**
- Ensure backend is running on port 5001
- Check MongoDB connection
- Verify `.env` configuration

**Images not showing?**
- Check files are in `client/public/images/`
- Verify exact filenames
- Hard refresh browser (Ctrl+Shift+R)

## 📞 Support

For issues or questions, check the documentation files or review the code comments.

## License

MIT

