import LikeButton from "../components/LikeButton";

export const metadata = {
  title: "My SEO Blog",
  description: "A server-rendered blog using React Server Components.",
};

const blogPosts = [
  {
    title: "Why React Server Components Matter",
    slug: "react-server-components-seo",
    summary: "Learn how RSC improves performance and SEO.",
  },
  {
    title: "Server Rendering vs Client Rendering",
    slug: "ssr-vs-csr",
    summary: "A deep dive into rendering strategies and SEO impact.",
  },
];

export default function BlogList() {
  return (
    <div>
      {blogPosts.map((post) => (
        <article key={post.slug} style={{ marginBottom: "20px" }}>
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.summary}</p>
          <LikeButton />
        </article>
      ))}
    </div>
  );
}
