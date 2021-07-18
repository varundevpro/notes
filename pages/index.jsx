import Head from 'next/head'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Footer } from '../components/Footer'
import { ListNotes } from '../components/ListNotes'

export default function Home() {
  return (
    <div className='font-sans'>
      <Head>
        <title>Notes app</title>
        <meta name="description" content="A working notes app. Inspired by the design from @Ariuka_dsgn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className='flex'>
        <aside className='border-r border-gray-300'>
          <Sidebar />
        </aside>

        <article>
          <Header />

          <ListNotes />

          <Footer />
        </article>
      </main>


    </div>
  )
}
