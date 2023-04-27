import React from 'react'
import Layout from '../components/Layout/Layout'
import Head from 'next/head'
import styles from '../styles/Work.module.css'
import Work from '../components/Work/Work'


function about() {
    
  return (
    <>
    <Head>
        <title>viceversa - about</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout>
    <div className={`${styles.page_container} width`}>
        <Work/>
    </div>

    </Layout>
    </>
    
  )
}

export default about