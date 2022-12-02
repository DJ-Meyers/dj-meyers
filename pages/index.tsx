import Head from 'next/head'

export default function Home() {
  return (
    <div className='w-full h-screen bg-stone-900'>
      <Head>
        <title>DJ Meyers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='h-full flex flex-col justify-between'>
        <div className='flex justify-center items-start w-auto mx-auto mb-auto mt-12 md:mt-36'>
          <div className='basis-1/2 pr-2'>
            <h1 className='text-3xl font-bolder text-right'>DJ Meyers</h1>
          </div>
          <div className='basis-1/2 flex flex-col pt-10 pl-2'>
            <a target='_blank' rel='noreferrer' href='https://cfbguessr.com' className='text-xl leading-6 mb-2 text-slate-300 hover:text-white'>CFBGuessr</a>
            <a target='_blank' rel='noreferrer' href='https://dj-meyers.github.io/gloomhaven-modifier-calculator/' className='text-xl leading-6 mb-2 text-slate-300 hover:text-white'>Gloomhaven Calculator</a>
            <a target='_blank' rel='noreferrer' href='https://docs.google.com/document/d/e/2PACX-1vS0tqRT2zvzhRV5z4kArwAhIxc4SSp9XsunDIzw3e52HRTShvsTgigGWZvY8NL1q7HKrEa28h730oTP/pub' className='text-xl leading-6 mb-2 text-slate-300 hover:text-white'>Resume</a>
            <a target='_blank' rel='noreferrer' href='https://github.com/dj-meyers' className='text-xl leading-6 mb-2 text-slate-300 hover:text-white'>Github</a>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/dj-meyers/' className='text-xl leading-6 mb-2 text-slate-300 hover:text-white'>LinkedIn</a>
            </div>
        </div>
        <h3 className='mt-auto mb-12 text-center'>To get in touch, email [me at djmeyers dot com]</h3>
      </main>
    </div>
  )
}
