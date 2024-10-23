// BlogComponent.js
import React from "react";
import "../styles.css";

const blogPosts = [
  { title: "Latest Marketing Trends", excerpt: "Discover the latest trends in marketing." },
  { title: "Boosting Your SEO", excerpt: "Learn how to improve your search engine ranking." },
  { title: "Content Marketing Strategies", excerpt: "Effective strategies for content marketing." },
];

const BlogComponent = () => {
  return (
    <section className="blog-section" id="blog">
      <h2>Recent Blog Posts</h2>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <button className="read-more-btn">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogComponent;
