import { Link, useParams } from 'react-router-dom'
import { blogPosts } from '../../data/blogPosts'
import './BlogPost.css'

function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((entry) => entry.slug === slug)

  if (!post) {
    return (
      <section className="blog-post">
        <div className="container">
          <h1>Post not found</h1>
          <Link to="/" className="blog-back">
            Back to home
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="blog-post">
      <div className="container">
        <Link to="/" className="blog-back">
          Back to home
        </Link>
        <p className="blog-post-category">{post.category}</p>
        <h1>{post.title}</h1>
        <p className="blog-post-date">{post.date}</p>
        <div className="blog-post-body">
          <p>{post.preview}</p>
          <p>
            Full write-up is in progress. This space will include detailed notes,
            diagrams, and takeaways from the build once the article is ready.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BlogPost
