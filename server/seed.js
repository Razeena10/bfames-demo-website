const mongoose = require('mongoose');
const Blog = require('./models/Blog');
const Service = require('./models/Service');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/magician-parth')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const seedData = async () => {
  try {
    // Clear existing data
    await Blog.deleteMany({});
    await Service.deleteMany({});

    // Seed blogs
    const blogs = await Blog.insertMany([
      {
        title: '5 Tips for Choosing the Perfect Magician for Your Event',
        slug: 'choosing-perfect-magician',
        excerpt: 'Planning an event and considering hiring a magician? Here are essential tips to ensure you book the right performer for your occasion.',
        content: '<p>Choosing the right magician can make or break your event...</p>',
        author: 'Magician Parth'
      },
      {
        title: 'The Art of Close-Up Magic: An Inside Look',
        slug: 'art-of-close-up-magic',
        excerpt: 'Discover the fascinating world of close-up magic and sleight of hand techniques that create intimate moments of wonder.',
        content: '<p>Close-up magic is one of the most intimate forms of entertainment...</p>',
        author: 'Magician Parth'
      }
    ]);

    // Seed services
    const services = await Service.insertMany([
      {
        title: 'Corporate Events',
        description: 'Elevate your corporate functions with professional magic entertainment that engages and amazes your guests.',
        price: 'Starting at $1,500',
        duration: '30-60 minutes',
        features: [
          'Customized performance for your brand',
          'Interactive audience participation',
          'Professional setup and equipment',
          'Perfect for conferences and galas'
        ]
      },
      {
        title: 'Private Parties',
        description: 'Make your celebration unforgettable with personalized magic shows tailored to your event.',
        price: 'Starting at $800',
        duration: '45 minutes',
        features: [
          'Close-up magic and stage performances',
          'Tailored to your party theme',
          'All ages welcome',
          'Birthday parties, anniversaries, and more'
        ]
      },
      {
        title: 'Wedding Entertainment',
        description: 'Add enchantment to your special day with elegant magic performances during cocktail hour or reception.',
        price: 'Starting at $1,200',
        duration: '1-2 hours',
        features: [
          'Elegant close-up magic',
          'Mingles with guests',
          'Creates memorable moments',
          'Professional and unobtrusive'
        ]
      },
      {
        title: 'Virtual Shows',
        description: 'Bring magic to your online events and virtual gatherings with interactive digital performances.',
        price: 'Starting at $600',
        duration: '30-45 minutes',
        features: [
          'Interactive Zoom/Teams performances',
          'Engaging for remote audiences',
          'Perfect for virtual team building',
          'High-quality production'
        ]
      }
    ]);

    console.log('Database seeded successfully!');
    console.log(`${blogs.length} blogs created`);
    console.log(`${services.length} services created`);
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
