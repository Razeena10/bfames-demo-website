import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("https://bfames-demo-website-1.onrender.com/api/blog");
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      // Fallback data
      setBlogs([
        {
          _id: '1',
          title: '5 Tips for Choosing the Perfect Magician for Your Event',
          slug: 'choosing-perfect-magician',
          excerpt: 'Planning an event and considering hiring a magician? Here are essential tips...',
          createdAt: new Date().toISOString()
        },
        {
          _id: '2',
          title: 'The Art of Close-Up Magic: An Inside Look',
          slug: 'art-of-close-up-magic',
          excerpt: 'Discover the fascinating world of close-up magic and sleight of hand...',
          createdAt: new Date().toISOString()
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="blog-page">
      <section className="page-hero">
        <div className="container">
          <h1>Blog</h1>
          <p>Insights, stories, and magic tips</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : blogs.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📝</div>
              <h3>No blog posts yet</h3>
              <p>Check back soon for insights, stories, and magic tips!</p>
            </div>
          ) : (
            <div className="blog-grid">
              {blogs.map((blog) => (
                <article key={blog._id} className="blog-card">
                  {blog.image && (
                    <div className="blog-card-image">
                      <img src={blog.image} alt={blog.title} />
                    </div>
                  )}
                  <div className="blog-card-content">
                    <div className="blog-date">{formatDate(blog.createdAt)}</div>
                    <h3>{blog.title}</h3>
                    <p>{blog.excerpt}</p>
                    <Link to={`/blog/${blog.slug}`} className="read-more">
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
