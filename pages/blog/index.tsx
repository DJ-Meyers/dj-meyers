import Head from "next/head";
import Link from "next/link";
import { posts } from "#site/content";
import type { InferGetStaticPropsType } from "next";

export function getStaticProps() {
  const publishedPosts = posts
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    props: {
      posts: publishedPosts.map(({ body, ...rest }) => rest),
    },
  };
}

export default function BlogIndex({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="w-full min-h-screen bg-bg">
      <Head>
        <title>Blog - DJ Meyers</title>
      </Head>

      <main className="max-w-2xl mx-auto px-4 py-12 md:py-24">
        <h1 className="text-3xl font-bold text-text mb-8">Blog</h1>

        {posts.length === 0 ? (
          <p className="text-text-muted">No posts yet.</p>
        ) : (
          <ul className="space-y-8">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-semibold text-text hover:text-text-muted">
                    {post.title}
                  </h2>
                </Link>
                <div className="text-sm text-text-muted mt-1">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="mx-2">·</span>
                  <span>{post.metadata.readingTime} min read</span>
                </div>
                {post.description && (
                  <p className="text-text-muted mt-2">{post.description}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
