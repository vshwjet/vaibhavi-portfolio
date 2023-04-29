import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout/Layout";
import WorkImage from "../../components/WorkImage/WorkImage";
import WorkLink from "../../components/WorkLink/WorkLink";

function aura() {
  const page_data = {
    work_hero_image:
      "https://drive.google.com/uc?id=1A8atzVf4u3k7hqZZckIzQ4EZex-xZy3R",
    work_hero_overview:
      "Aura is the ultimate destination for soothing your soul, body, and mind. Indulge in our unique blend of scented candles that will help you unwind after a busy day!",
    work_hero_scope:
      "Brand Identity, Logo, Packaging, Naming",
  };

  return (
    <>
      <Head>
        <title>viceversa - aura</title>
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
              image_src={`https://drive.google.com/uc?id=12sb5f9Qm13PTucG9Tq0zwDlERsg-2RfB`}
            />
            <WorkImage
              image_src={`https://drive.google.com/uc?id=1eOmH86cwuYG-i_tLvT_qJqiidPF3KliS`}
            />
            <WorkImage
              image_src={`https://drive.google.com/uc?id=180XxBseqj8SRUezLALEe4UfRJN5XzFt3`}
            />
            <WorkImage
              image_src={`https://drive.google.com/uc?id=1qcG5ip-CF6ntjnf2HwRWsnCFkyY-2t2I`}
            />
            <WorkImage
              image_src={`https://drive.google.com/uc?id=1v0KapN27aSPcYeBW0flIUzgJCdNuRD27`}
            />
            <WorkImage
              image_src={`https://drive.google.com/uc?id=1rViIN0ob_Q7vUUvKmY0fTOMlffKZ9Xl0`}
            />
            <WorkImage
              image_src={`https://drive.google.com/uc?id=1UBfu6Apd-jhWV9VgT2DjkzC1FO_ftC2Q`}
            />
            <WorkImage
              image_src={`https://drive.google.com/uc?id=1VIVrxxjxRE180z6NTrAPFu0TexOL9v7p`}
            />
            <WorkImage
              image_src={`https://drive.google.com/uc?id=1N8zISzMXL-WSY-__6rMkxJKHxbMQmWDO`}
            />
          </div>
        </section>
      </Layout>
    </>
  );
}

export default aura;
