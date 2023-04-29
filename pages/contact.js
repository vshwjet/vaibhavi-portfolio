import Head from "next/head";
import Image from "next/image";
import React from "react";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Contact.module.css";
import contact_image_1 from "../assets/contact_image_1.png"

function contact() {
  return (
    <>
      <Head>
        <title>viceversa - contact</title>
        <link rel="icon" href="/vector.png" />      </Head>
      <Layout>
        <section>
          <div className={`${styles.page_container} width`}>
            <div className={styles.contact_row}>
            <div className={styles.contact_image_1}>
                  <Image src={contact_image_1} alt={`Work Page Image 1`} />
            </div>
            <div className={styles.contact_text}>
                <h4>Send me a carrier pigeon!</h4>
                <p>Just kidding, we haven't quite mastered the art of pigeon communication yet!
                <br/>
                <br/>
                You can reach out to me by email or phone. My inbox is always open, so drop a line and let's connect!</p>
                <div className={styles.contact_social}>
                    <p>hello.studioviceversa@gmail.com</p>
                    <p>9763438130</p>
                </div>
            </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default contact;
