import BlogList from "./blog/BlogList";

export const metadata = {
  title: "Home | My SEO Blog",
  description: "Server-rendered blog using React Server Components.",
};

export default function HomePage() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to My SEO Blog</h1>
      <BlogList />
    </main>
  );
}
