import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts } from "../app/lib/blog";

export default async function Home() {
  const posts = await getAllBlogPosts();
  const featuredPosts = posts.slice(0, 3);

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to TechBlog</h1>
        <p className="lead">
          Expert insights on React, performance, and modern web development
        </p>
        <Link href="/blog" className="cta-button">
          Browse All Articles
        </Link>
      </section>

      <section className="featured-posts">
        <h2>Featured Articles</h2>
        <div className="posts-grid">
          {featuredPosts.map((post) => (
            <div key={post.slug} className="post-card">
              <div className="image-container">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={400}
                  height={225}
                  className="post-image"
                />
              </div>
              <div className="card-content">
                <h3>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="date">
                  {new Date(post.date).toLocaleDateString()}
                </p>
                <p className="excerpt">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="read-more">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
