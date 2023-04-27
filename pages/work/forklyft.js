import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout/Layout";
import WorkImage from "../../components/WorkImage/WorkImage";
import WorkLink from "../../components/WorkLink/WorkLink";

function forklyft() {
  const page_data = {
    work_hero_image:
      "https://drive.google.com/uc?id=1eNMuv21dr-8SraBCHhGJ_McI1gH5kGGi",
    work_hero_overview:
      "At Forklyft, we're dedicated to delivering top-quality services and support to our clients. We work closely with businesses to understand their unique needs and goals, tailoring our services to meet those specific requirements.",
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
              image_src={`https://drive.google.com/uc?id=1AR6rv-h8jbHT3M0M0xTvak1IwZik15Kb`}
            />

            <a href="https://xd.adobe.com/view/6f681aa0-5143-4036-a9dd-4fa35d080aba-3a3b/" target="_blank">

            <WorkImage
              image_src={`https://drive.google.com/uc?id=1sp2eeYLPl1tTOmM8AzCAZDvm-DYfQuxY`}
            />
            </a>

           

          </div>
        </section>
      </Layout>
    </>
  );
}

export default forklyft;
