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
      "https://drive.google.com/uc?id=1p3GuCtNmFqjHz_wKKLp4fHBIrSTi1Tn4",
    work_hero_overview:
      "Radiance is a natural skincare line that blends luxury with science, using the highest quality green science and innovation available in the industry.",
    work_hero_scope:
      "UI UX",
  };

  return (
    <>
      <Head>
        <title>viceversa - radiance</title>
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
              image_src={`https://drive.google.com/uc?id=1iHAGGjTB7gtWXI1gJyxhC74wJVCAT5Kp`}
            />

            <a href="https://xd.adobe.com/view/a78440a6-8ef2-4b75-bcea-20539f4c2eeb-f2d7/" target="_blank">

            <WorkImage
              image_src={`https://drive.google.com/uc?id=1GpjnNsAK1EjddtWzkHWYjT_cCRzbzMot`}
            />
            </a>

           

          </div>
        </section>
      </Layout>
    </>
  );
}

export default radiance;
