import Head from 'next/head'
import Link from 'next/link'
import { posts } from '#site/content'
import type { InferGetStaticPropsType } from 'next'

export function getStaticProps() {
  const hasPosts = posts.some((post) => !post.draft)
  return { props: { hasPosts } }
}

export default function Home({ hasPosts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className='w-full h-screen bg-bg'>
      <Head>
        <title>DJ Meyers</title>
      </Head>

      <main className='h-full flex flex-col justify-between'>
        <div className='grid grid-cols-[auto_1fr] items-start gap-x-10 gap-y-8 w-full max-w-2xl mx-auto mb-auto mt-12 md:mt-36 px-6'>
          <h1 className='text-3xl text-text whitespace-nowrap'>DJ Meyers</h1>
          <div className='flex flex-col'>
            {hasPosts && <Link href='/blog' className='text-xl leading-6 text-text-muted hover:text-text'>Blog</Link>}
          </div>

          <h2 className='text-sm uppercase tracking-wide leading-6 text-right text-text-muted/70'>Projects</h2>
          <div className='flex flex-col'>
            <a target='_blank' rel='noreferrer' href='https://galewings.com' className='text-xl leading-6 text-text-muted hover:text-text'>Gale Wings</a>
            <p className='text-sm leading-5 mb-2 text-text/50'>VGC calculator with a custom parsing algorithm that makes it the fastest and most ergonomic tool of its kind</p>
            <a target='_blank' rel='noreferrer' href='https://dj-trading-acct.github.io/collection/' className='text-xl leading-6 text-text-muted hover:text-text'>Collection Tracker</a>
            <p className='text-sm leading-5 text-text/50'>Repo-based Pokémon collection tracker that uses the GitHub API to make changes to a JSON source-of-truth</p>
          </div>

          <h2 className='text-sm uppercase tracking-wide leading-6 text-right text-text-muted/70'>Boring Stuff</h2>
          <div className='flex flex-col'>
            <a target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/14oelwmrGSAF1ZV0IZh9eCDa7x7X9_zXC/view' className='text-xl leading-6 mb-2 text-text-muted hover:text-text'>Resume</a>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/dj-meyers/' className='text-xl leading-6 mb-2 text-text-muted hover:text-text'>LinkedIn</a>
            <a target='_blank' rel='noreferrer' href='https://github.com/dj-meyers' className='text-xl leading-6 text-text-muted hover:text-text'>Github</a>
          </div>
        </div>
        <h3 className='mt-auto mb-12 text-center text-text'>To get in touch, email [me at djmeyers dot com]</h3>
      </main>
    </div>
  )
}
