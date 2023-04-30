import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout/Layout";
import WorkImage from "../../components/WorkImage/WorkImage";
import WorkLink from "../../components/WorkLink/WorkLink";

function manzuri() {
  const page_data = {
    work_hero_image:
      "https://lh3.googleusercontent.com/drive-viewer/AFGJ81piWN77Py_gE3Rkh8bxEqd5xlwpXiPVQG-d3LIXkEAToYTqtwWCqPrIklaWur9iKmVgY_OIs0cce8zBKgawR9H4Puuxqg=s2560",
    work_hero_overview:
      "This startup is all about sexual positivity and aims to provide pleasure-focused sex education to young people in the country through content and commerce.",
    work_hero_scope:
      "UI UX, Website banners, Social media, newsletters, Art direction",
  };

  return (
    <>
      <Head>
        <title>viceversa - manzuri</title>
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
              image_src={`https://lh3.googleusercontent.com/drive-viewer/AFGJ81r-roaHBMGJopgA1I_p_yS_DYweZWHwHBQUR1RVz2ZF4qW6hq7_7FBjNl84b3D40I07iJyx9_WakrgpACKy7McSoFgffA=s1600`}
            />
            <WorkImage
              image_src={`https://lh3.googleusercontent.com/drive-viewer/AFGJ81qeC21HyOwkeZ0XEKDwBxU78ZnVEgEoo78k0oSPrB53MD69S7N1n4NiK7cCDo1Yl-IDZeq6zSEv6xzoUYvKj7jWcAAI=s1600`}
            />
            <WorkImage
              image_src={`https://lh3.googleusercontent.com/drive-viewer/AFGJ81rIO5kcgp0VlxrPybv2ql1y6GppVGJ8ToN8vJQdXEVky1DnFRkToX4WOP88z--TGk-klcBbW5IYFe0DEu2QDJw08Y9n_w=s1600`}
            />

            <a
              href="https://www.figma.com/proto/hoOq49t2NAbCHXiyhTGCeV/manzuri-valentine-landing-page?page-id=0%3A1&node-id=1-2&viewport=546%2C435%2C0.16&scaling=scale-down"
              target="_blank"
            >
              <WorkImage
                image_src={`https://lh3.googleusercontent.com/drive-viewer/AFGJ81ojm0nuxjC49v7zhbO6YEIj94u7arKdjv8vuP0fB6s5qnHLNwTuz8A9hVbTfhkxZ4RKgnKalD12z4Fk33rjT9ZNYwiH=s1600`}
              />
            </a>

            <a
              href="https://www.figma.com/proto/hoOq49t2NAbCHXiyhTGCeV/manzuri-valentine-landing-page?page-id=4%3A320&node-id=4-767&viewport=937%2C757%2C0.12&scaling=scale-down"
              target="_blank"
            >
              <WorkImage
                image_src={`https://drive.google.com/uc?id=1DHeqsrlKfBC-TF0V3wBrDrhHIJRJ2EL4`}
              />
            </a>

            <a
              href="https://www.figma.com/proto/hoOq49t2NAbCHXiyhTGCeV/manzuri-valentine-landing-page?page-id=15%3A2&node-id=15-3&viewport=499%2C416%2C0.21&scaling=scale-down"
              target="_blank"
            >
              <WorkImage
                image_src={`https://drive.google.com/uc?id=1-lRK-Kzs391zmp1h5LiaSbbFQ2GuNZgE`}
              />
            </a>

            <WorkImage
              image_src={`https://drive.google.com/uc?id=1HdaLe4VjmXuvgPC9EtVTcmBV3PXpUsiZ`}
            />
            <WorkImage
              image_src={`https://drive.google.com/uc?id=150SZpyR0oDphFjhQ8jQV_qxvLvBH6aV_`}
            />
          </div>
        </section>
      </Layout>
    </>
  );
}

export default manzuri;
