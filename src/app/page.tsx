export default function Home() {
  return (
    <main className='font-mons antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto'>
      <div className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
        <aside className='-ml-[8px] mb-16 tracking-tight'>
          <div className="lg:sticky lg:top-20">
            <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative" id="nav">
              <div className="flex flex-row space-x-0 pr-10">
                <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2" href="/">home</a>
                <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2" href="/work">work</a>
                <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2" href="/blog">blog</a>
              </div>
            </nav>
          </div>
        </aside>
        <section>
          <h1 className='font-medium text-2xl mb-8 tracking-tighter'>
            Hey, I'm Aditya Raj 👋
          </h1>
          <p className='prose prose-neutral dark:prose-invert'>
            Welcome to my personal website – a digital haven where I share my passions without social media algorithms. Explore and enjoy my curated digital living room.
          </p>
          <br />
          <p className='prose prose-neutral dark:prose-invert'>
            I'm a 3rd-year BTech Computer Science & Engineering Student, on the journey to becoming a Software Engineer. I have a keen interest in technology and aircrafts. I enjoy capturing moments through photography and delving into the complexities of our world.
          </p>
        </section>
      </div>
    </main>
  )
}
