import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout/Layout";
import WorkImage from "../../components/WorkImage/WorkImage";
import WorkLink from "../../components/WorkLink/WorkLink";

function fruity() {
  const page_data = {
    work_hero_image:
      "https://drive.google.com/uc?id=1sm6Aq5VbhbEe8uKsBXyWzdJVcBCgqPoE",
    work_hero_overview:
      "Experience the goodness of nature with our organic fresh juices. Made from the finest ingredients, Fruity’s juices are a refreshing and healthy addition to your daily routine.",
    work_hero_scope:
      "Brand Identity, Logo, Packaging, Naming",
  };

  return (
    <>
      <Head>
        <title>viceversa - fruity</title>
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
              image_src={`https://drive.google.com/uc?id=1a99z1QiIh9eAbV-xO-SKGb8WQJPsz_ZH`}
            />
            <WorkImage
              image_src={`https://drive.google.com/uc?id=1swGwmiBPBNILVqBEYlAQiV7syiBRptTh`}
            />
            <WorkImage
              image_src={`https://drive.google.com/uc?id=1OVPuAy72l1ZoMdOHo6cikOBKD2TbcoYs`}
            />
            <WorkImage
              image_src={`https://drive.google.com/uc?id=1CxHoMwhkMMAYOZ7rmD9ybLHKahUVVEMo`}
            />
            <WorkImage
              image_src={`https://drive.google.com/uc?id=1fgTGL-H_Bvc5lkIP4blb3_LyuHqFUfLi`}
            />
            <WorkImage
              image_src={`https://drive.google.com/uc?id=1-zklErBCt5BOp4ylrT_ylI-ITyXDRodo`}
            />
            <WorkImage
              image_src={`https://drive.google.com/uc?id=1yJ3Sbe3ZIVSSvWsT18FX35U7ujVAmIbt`}
            />
            <WorkImage
              image_src={`https://drive.google.com/uc?id=1WU5kpcvaEukQxJWSKkhp52tZZZz4E3sG`}
            />
            <WorkImage
              image_src={`https://drive.google.com/uc?id=1XiwiZkk1WmnLAj4gnLObCF9fCjAK8N3Y`}
            />
            <WorkImage
              image_src={`https://drive.google.com/uc?id=1_yjHbJXX1ankwevRnL6-hAkVPFWeVyV4`}
            />
            <WorkImage
              image_src={`https://drive.google.com/uc?id=11AIEdfi6H23V93P_5XYXMolvSg60mIG-`}
            />
            <WorkImage
              image_src={`https://drive.google.com/uc?id=1LdBkx1eD9eSl6zPL8Vv19xchNgYP6QMh`}
            />
            
          </div>
        </section>
      </Layout>
    </>
  );
}

export default fruity;
