import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout/Layout";
import WorkImage from "../../components/WorkImage/WorkImage";
import WorkLink from "../../components/WorkLink/WorkLink";

function trishveda() {
  const page_data = {
    work_hero_image:
      "https://drive.google.com/uc?id=1ESXu7Cp2xcrlcQxQXjPnaTa_my2T4koO",
    work_hero_overview:
      "Aura is the ultimate destination for soothing your soul, body, and mind. Indulge in our unique blend of scented candles that will help you unwind after a busy day!",
    work_hero_scope:
      "UI UX",
  };

  return (
    <>
      <Head>
        <title>viceversa - trishveda</title>
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
              image_src={`https://drive.google.com/uc?id=1H-2Jh6CNePayikPG-GyPv-uT-118E17Y`}
            />

            <a href="https://xd.adobe.com/view/e7fa6860-b67a-45d5-bb5b-80485d0446ce-b2a9/" target="_blank">

            <WorkImage
              image_src={`https://drive.google.com/uc?id=1ofJDr1ltQoK78YuLAjJrbWuL4s5qL527`}
            />
            </a>

            <a href="https://xd.adobe.com/view/2684b2b9-ed09-4122-98fe-14177d195f21-73d7/" target="_blank">

            <WorkImage
              image_src={`https://drive.google.com/uc?id=1YFFGEo4tJbLhspXAI6uc_B_W7v4fLTDz`}
            />
            </a>
            
            <WorkLink link={`https://www.trishvedanaturals.com/`} />


          </div>
        </section>
      </Layout>
    </>
  );
}

export default trishveda;
