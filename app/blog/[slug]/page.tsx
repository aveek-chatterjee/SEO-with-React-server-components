import Image from "next/image";
import { Metadata } from "next";
import { getBlogPost } from "../../lib/blog";
import BlogJsonLd from "../../components/BlogJsonLd";
import CommentForm from "../../components/CommentForm";
import RelatedPosts from "../../components/RelatedPosts";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  return {
    title: `${post.title} | Tech Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);

  return (
    <>
      <BlogJsonLd post={post} />
      <article className="blog-post">
        <h1>{post.title}</h1>
        <div className="post-meta">
          <p className="date">{new Date(post.date).toLocaleDateString()}</p>
          <div className="author-info">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={40}
              height={40}
              className="avatar"
            />
            <span>{post.author.name}</span>
          </div>
        </div>

        <div className="cover-image">
          <Image
            src={post.coverImage}
            alt={post.title}
            width={1200}
            height={630}
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="featured-image"
          />
        </div>

        <div className="tags">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <section className="comments-section">
        <h2>Comments</h2>
        <CommentForm postSlug={params.slug} />
      </section>

      <section className="related-posts-section">
        <h2>Related Posts</h2>
        <Suspense
          fallback={<div className="loading">Loading related posts...</div>}
        >
          <RelatedPosts currentSlug={params.slug} />
        </Suspense>
      </section>
    </>
  );
}
