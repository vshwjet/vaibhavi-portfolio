import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Info from '../components/Info/Info';
import Work from '../components/Work/Work';
import Cta from '../components/CTA/Cta';
import Footer from '../components/Footer/Footer';
import { MongoClient } from 'mongodb';

export async function getStaticProps(context) {

  const mongoClient =  new MongoClient('mongodb+srv://vaibhaviportfolio:1JyDN06JZaL154DY@cluster0.jyulll4.mongodb.net/?retryWrites=true&w=majority');
  const data = await mongoClient.db('vaibhavi').collection('work').find({}).toArray;

  console.log(data);

  return {
    props: {}, // will be passed to the page component as props
  }
}

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
