import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout/Layout";
import WorkImage from "../../components/WorkImage/WorkImage";
import WorkLink from "../../components/WorkLink/WorkLink";

function radiance() {
  const page_data = {
    work_hero_image:
      "https://drive.google.com/uc?id=1Onx27eXJP_je6bXA3xEhWBYwTAcw4Zmm",
    work_hero_overview:
      "J and K General Contractors is one of the leading companies in the sector of specialized general contracting services in the State of North Carolina.",
    work_hero_scope:
      "UI UX",
  };

  return (
    <>
      <Head>
        <title>viceversa - about</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
              image_src={`https://drive.google.com/uc?id=1Dyeq9wzAR0dJrpe3ohFMcrPnxIpXuJuq`}
            />

            <a href="https://xd.adobe.com/view/e7f2a673-755a-4e44-8b3e-bd14c19194c0-b2a1/" target="_blank">

            <WorkImage
              image_src={`https://drive.google.com/uc?id=1kwtAVkIa0IwN6-wHLQn-k2YyPAGT68QJ`}
            />
            </a>

           

          </div>
        </section>
      </Layout>
    </>
  );
}

export default radiance;
