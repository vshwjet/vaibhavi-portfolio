import React from 'react'
import Layout from '../components/Layout/Layout'
import Head from 'next/head'
import styles from '../styles/Work.module.css'
import Work from '../components/Work/Work'


function about() {
    
  return (
    <>
    <Head>
        <title>viceversa - work</title>
        <link rel="icon" href="/vector.png" />      </Head>
    <Layout>
      <section>
      <div className={`${styles.page_container}`}>
        <Work/>
    </div>
      </section>
    

    </Layout>
    </>
    
  )
}

export default about