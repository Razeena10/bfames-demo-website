import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      const response = await axios.get(`https://bfames-demo-website-1.onrender.com/api/blog/${slug}`);
      setBlog(response.data);
    } catch (error) {
      console.error('Error fetching blog:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="container" style={{padding: '100px 20px'}}>Loading...</div>;
  if (!blog) return <div className="container" style={{padding: '100px 20px'}}>Blog not found</div>;

  return (
    <div className="blog-post-page">
      <article className="blog-post">
        <div className="container">
          <Link to="/blog" className="back-link">← Back to Blog</Link>
          <h1>{blog.title}</h1>
          <div className="blog-meta">
            <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
            <span>By {blog.author}</span>
          </div>
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
