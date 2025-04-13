"use client";

import { BlogPost } from "../lib/blog";

export default function BlogJsonLd({ post }: { post: BlogPost }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      image: post.author.avatar,
    },
    image: post.coverImage,
    description: post.excerpt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://myblog.example.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
