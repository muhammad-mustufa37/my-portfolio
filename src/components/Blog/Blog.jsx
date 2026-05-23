import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { blogPosts } from '../../data/blogPosts'
import './Blog.css'

const sectionMotion = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function Blog() {
  return (
    <motion.section
      id="blog"
      className="blog-section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionMotion}
    >
      <div className="container">
        <p className="section-title">BLOG</p>
        <h2 className="section-heading">Notes from the lab</h2>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article className="glass-panel blog-card" key={post.slug}>
              <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
                <span className="blog-category">{post.category}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.preview}</p>
              <Link to={`/blog/${post.slug}`} className="blog-link">
                -&gt; Read
              </Link>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Blog
