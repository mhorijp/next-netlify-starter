import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <script src="https://cdn.id-hug.com/js/id-hug.js?k=2949673445"></script>
        <script>
          idhug('set', {
            title: document.title,
          });
          idhug('user_id1', 'xxxx');
          idhug('user_id2', 'yyyy');
          let event_id = idhug('event', 'pageView');
          console.log(`event_id: ${event_id}`);
        </script>

      </main>

      <Footer />
    </div>
  )
}
