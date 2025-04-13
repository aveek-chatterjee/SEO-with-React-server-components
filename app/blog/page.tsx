import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts } from "../lib/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Blog | Latest Articles",
  description: "Read our latest articles on web development, React, and more",
};

export default async function BlogIndex() {
  // Data fetching happens on the server
  const posts = await getAllBlogPosts();

  return (
    <div className="blog-index">
      <h1>Latest Articles</h1>
      <div className="posts-grid">
        {posts.map((post) => (
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
              <h2>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="date">{new Date(post.date).toLocaleDateString()}</p>
              <div className="tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="excerpt">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="read-more">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
