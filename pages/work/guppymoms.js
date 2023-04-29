import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout/Layout";
import WorkImage from "../../components/WorkImage/WorkImage";
import WorkLink from "../../components/WorkLink/WorkLink";

function guppymoms() {
  const page_data = {
    work_hero_image:
      "https://drive.google.com/uc?id=1G8pwTeLd0YkLTCYDG5VeHWfdHLNMybsI",
    work_hero_overview:
      "Experience the goodness of nature with our organic fresh juices. Made from the finest ingredients, Fruity’s juices are a refreshing and healthy addition to your daily routine.",
    work_hero_scope:
      "UI UX",
  };

  return (
    <>
      <Head>
        <title>viceversa - guppymoms</title>
        <link rel="icon" href="/vector.png" />      </Head>
      <Layout>
        <section>
          <div className={`work_page_container width`}>
            <div className="work_hero_container">
              <div className="work_hero_image">
                <Image
                  src={page_data.work_hero_image}
                  width={644}
                  height={587}
                />
              </div>
              <div className="work_hero_text">
                <h4>Overview</h4>
                <p>
                  {page_data.work_hero_overview && page_data.work_hero_overview}
                </p>
                <br />
                <br />
                <h4>Scope of work</h4>
                <p>{page_data.work_hero_scope && page_data.work_hero_scope}</p>
              </div>
            </div>

            <WorkImage
              image_src={`https://drive.google.com/uc?id=13DfXww6hhwa9zZSbUgyOVv98dIC_o-qk`}
            />

            <a href="https://xd.adobe.com/view/fe76b79a-f8d8-4a47-9545-90bfec7d29c7-ab25/" target="_blank">

            <WorkImage
              image_src={`https://drive.google.com/uc?id=1Zsoc_t6N3Vqr-FoqRutlRyrCPOM8f0W2`}
            />
            </a>

           

          </div>
        </section>
      </Layout>
    </>
  );
}

export default guppymoms;
