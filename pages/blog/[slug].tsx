import Head from "next/head";
import Link from "next/link";
import { posts } from "#site/content";
import { MDXContent } from "../../components/mdx-content";
import type { GetStaticPaths, InferGetStaticPropsType } from "next";

export const getStaticPaths: GetStaticPaths = () => {
  const paths = posts
    .filter((post) => !post.draft)
    .map((post) => ({ params: { slug: post.slug } }));

  return { paths, fallback: false };
};

export function getStaticProps({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return { notFound: true as const };
  }

  return { props: { post } };
}

export default function BlogPost({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="w-full min-h-screen bg-bg">
      <Head>
        <title>{post.title} - DJ Meyers</title>
        {post.description && (
          <meta name="description" content={post.description} />
        )}
      </Head>

      <main className="max-w-2xl mx-auto px-4 py-12 md:py-24">
        <Link
          href="/blog"
          className="text-sm text-text-muted hover:text-text mb-8 inline-block"
        >
          &larr; Back to blog
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-text">{post.title}</h1>
            <div className="text-sm text-text-muted mt-2">
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
            {post.tags.length > 0 && (
              <div className="flex gap-2 mt-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-bg text-text-muted border border-text-muted/20 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="prose prose-invert max-w-none">
            <MDXContent code={post.body} />
          </div>
        </article>
      </main>
    </div>
  );
}
