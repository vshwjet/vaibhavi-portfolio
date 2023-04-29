import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../components/Layout/Layout";
import styles from "../styles/About.module.css";
import about_image_1 from "../assets/about_image_1.png";

function about() {
  return (
    <>
      <Head>
        <title>viceversa - about</title>
        <link rel="icon" href="/vector.png" />      </Head>
      <Layout>
      <section>

        <div className={`${styles.page_container} width`}>

              <div className={styles.about_row}>
                <div className={styles.about_image_1}>
                  <Image src={about_image_1} alt={`About Page Image 1`} />
                </div>
                <div className={styles.about_text}>
                  <p>
                    Hey, I'm Vaibhavi, an independent art director and creative
                    mastermind. With a background in visual communication
                    design, I've worked with a wide range of brands to create
                    impactful visual identities and stunning designs. My passion
                    is bringing brands to life through thoughtful and meaningful
                    design that resonates with audiences.
                    <br />
                    <br />
                    Whether I'm working with a well-established brand or a new
                    business, I approach every project with professionalism,
                    creativity, and expertise. Collaborating closely with
                    clients, I strive to build strong relationships to achieve
                    our shared vision.
                  </p>
                </div>
              </div>
              <div className={styles.about_row}>
                <div className={styles.about_text}>
                  <p>
                  I'll let you in on a secret - while I take my work seriously, I'm not all business all the time. I love to have fun and let loose with quirky and playful things. Indulging in my hobbies and interests, like trying out new art mediums or exploring new cities, recharges and inspires me.
                  <br />
                    <br />
Whether designing a new logo or creating a viral social media campaign, I bring my unique blend of passion, talent, and humor to every project. Let's make something visually stunning and fun together!
                  </p>
                  <br />
                    <br />
                    <div className={styles.about_cta}>
                <Link href="/">Let’s work together</Link>

                </div>
                </div>
                <div className={styles.about_image_1}>
                  <Image src={about_image_1} alt={`About Page Image 1`} />
                </div>
              </div>
          </div>

        </section>

      </Layout>
    </>
  );
}

export default about;
