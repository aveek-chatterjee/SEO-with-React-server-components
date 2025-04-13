import Link from "next/link";
import Image from "next/image";
import { getRelatedPosts } from "../lib/blog";

export default async function RelatedPosts({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const relatedPosts = await getRelatedPosts(currentSlug);

  if (relatedPosts.length === 0) {
    return <p>No related posts found.</p>;
  }

  return (
    <div className="related-posts">
      <div className="posts-grid small">
        {relatedPosts.map((post) => (
          <div key={post.slug} className="post-card small">
            <div className="image-container small">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={150}
                height={100}
                className="post-image small"
              />
            </div>
            <div className="card-content small">
              <h3>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="date small">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <Link href={`/blog/${post.slug}`} className="read-more small">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
