import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Info from '../components/Info/Info';
import Work from '../components/Work/Work';
import Cta from '../components/CTA/Cta';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>viceversa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className='header-main'>
        <Header />
      </section>
      <section className='hero-main'>
        <Hero />
      </section>
      <section className='info-main'>
        <Info />
      </section>
      <section className='work-main'>
        <Work />
      </section>
      <section className='cta-main'>
        <Cta />
      </section>
      <section className='cta-main'>
        <Footer />
      </section>

      <footer>

      </footer>
    </div>
  )
}
