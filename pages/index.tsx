import Head from 'next/head'

export default function Home() {
  return (
    <div className='w-full h-screen bg-bg'>
      <Head>
        <title>DJ Meyers</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
      </Head>

      <main className='h-full flex flex-col justify-between'>
        <div className='flex justify-center items-start w-auto mx-auto mb-auto mt-12 md:mt-36'>
          <div className='basis-1/2 pr-2'>
            <h1 className='text-3xl font-bolder text-right text-text'>DJ Meyers</h1>
          </div>
          <div className='basis-1/2 flex flex-col pt-10 pl-2'>
            <a href='/poke/dex' className='text-xl leading-6 mb-2 text-text-muted hover:text-text'>Living Dex Tracker</a>
            <a target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/14oelwmrGSAF1ZV0IZh9eCDa7x7X9_zXC/view' className='text-xl leading-6 mb-2 text-text-muted hover:text-text'>Resume</a>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/dj-meyers/' className='text-xl leading-6 mb-2 text-text-muted hover:text-text'>LinkedIn</a>
            <a target='_blank' rel='noreferrer' href='https://github.com/dj-meyers' className='text-xl leading-6 mb-2 text-text-muted hover:text-text'>Github</a>
            </div>
        </div>
        <h3 className='mt-auto mb-12 text-center text-text'>To get in touch, email [me at djmeyers dot com]</h3>
      </main>
    </div>
  )
}
