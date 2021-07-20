import Head from "next/head";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";
import { ListNotes } from "../components/ListNotes";
import { NotesProvider } from "../context/notes";

export default function Home() {
  return (
    <div className="font-sans h-full">
      <Head>
        <title>Notes app</title>
        <meta
          name="description"
          content="A working notes app. Inspired by the design from @Ariuka_dsgn"
        />
        <link rel="icon" href="https://fav.farm/🪶" />
      </Head>

      <main className="flex h-full">
        <NotesProvider>
          <aside className="border-r border-gray-300">
            <Sidebar />
          </aside>

          <article className="mx-auto h-full flex flex-col">
            <Header />
            <ListNotes />
            <Footer />
          </article>
        </NotesProvider>
      </main>
    </div>
  );
}
