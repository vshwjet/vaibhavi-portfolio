import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout/Layout";
import WorkImage from "../../components/WorkImage/WorkImage";
import WorkLink from "../../components/WorkLink/WorkLink";

function modernschool() {
  const page_data = {
    work_hero_image:
      "https://drive.google.com/uc?id=1WXE9eNKbtGBX6YvOCGMbek8HYxaPsRzw",
    work_hero_overview:
      "Modern School is a co-educational, private school in New Delhi, India. It was founded in 1920 by Lala Raghubir Singh, a prominent Delhi-based businessman and philanthropist.",
    work_hero_scope:
      "UI UX, Prospectus, Social media templates",
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
              image_src={`https://drive.google.com/uc?id=1eWw-NDFzb-oHHgcoHBUyz-rWvGYGDk_4`}
            />
            <WorkImage
              image_src={`https://drive.google.com/uc?id=17MfMLyNpCaadJuWtQ1gDon58jYQ-eT_F`}
            />
            <WorkImage
              image_src={`https://drive.google.com/uc?id=1GLfhoKcMLeKo2IriwjT-f-KfkkC3PrqI`}
            />
            <a href="https://www.figma.com/proto/LxbP9j9oMBysEFaOdNfiBe/TMS-portfolio-edit?page-id=0%3A1&node-id=1-3&viewport=537%2C435%2C0.15&scaling=scale-down" target="_blank">
            <WorkImage
              image_src={`https://drive.google.com/uc?id=1UgFsZJJ_iq9NnRLFbbKkzsoPboiQQunw`}
            /></a>
            <a href="https://www.figma.com/proto/LxbP9j9oMBysEFaOdNfiBe/TMS-portfolio-edit?page-id=1%3A118&node-id=1-120&viewport=365%2C769%2C0.23&scaling=scale-down" target="_blank">
            <WorkImage
              image_src={`https://drive.google.com/uc?id=12gS9EjJYP2WinwWeCShj595nUZVvgFPK`}
            /></a>
            <a href="https://www.figma.com/proto/LxbP9j9oMBysEFaOdNfiBe/TMS-portfolio-edit?page-id=1%3A231&node-id=1-233&viewport=497%2C415%2C0.13&scaling=scale-down" target="_blank">
            <WorkImage
              image_src={`https://drive.google.com/uc?id=1PwB5m6bvdaz0achGbdbPXnUlKBlysbVO`}
            /></a>
            <WorkImage
              image_src={`https://drive.google.com/uc?id=1XDtaCeh1jgaglbuYz72YQGoBxf1oLZ9w`}
            />
            <a href="https://drive.google.com/drive/folders/1qrTOqOqI4JG3yKopDuGgch6VZkD-T3qT?usp=share_link" target="_blank">
            <WorkImage
              image_src={`https://drive.google.com/uc?id=128mtg37905C_X0RJJFy1RKH_iCI2fkkJ`}
            /></a>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default modernschool;
