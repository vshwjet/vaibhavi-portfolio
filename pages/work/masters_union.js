import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Layout from '../../components/Layout/Layout';
import WorkImage from '../../components/WorkImage/WorkImage';
import WorkLink from '../../components/WorkLink/WorkLink';

function masters_union() {
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
                        <Image src={`https://lh3.googleusercontent.com/drive-viewer/AFGJ81ou5ZuSKwVoq-9L9AcFjziEaurejQMdBhLinKiZiIYKlDAhutrPmBx5rpNc3ny29UqOaQEhoIOatvsMCIecrWIMTLsB=s2560`} width={644} height={587}/>
                    </div>
                    <div className="work_hero_text">
                        <h4>Overview</h4>
                        <p>Masters Union is a modern business school recognized for its educational YouTube videos and masterclasses, utilizing the platform as a means to draw a larger audience.</p>
                        <br/>
                        <br/>
                        <h4>Scope of work</h4>
                        <p>Youtube Thumbnails</p>
                    </div>
                </div>

                <WorkImage image_src={`https://lh3.googleusercontent.com/drive-viewer/AFGJ81rCJl9beEYjwoePff9LHXGKDbgwo1Q8xpnJOqj1uZbLOXDVs7GB3cijskAmD9RRYFyRRLV-vQ0aBoiUbwyDmK1O-gmpXQ=s1600`}/>
                <WorkImage image_src={`https://lh3.googleusercontent.com/drive-viewer/AFGJ81pxc1Y9RQuqyAatQdi3xHqnSxJjcSjrGmRtrO-t2VgqoET9HDg_mJIjrDsijvrrjZems6HWTb5fqltKoyXnRqxGdZYz7g=s1600`}/>
                <WorkImage image_src={`https://lh3.googleusercontent.com/drive-viewer/AFGJ81qylXnw0qY9rctLxwUn3lZipKOqPLi11VCtBhQzb_5qn1DeAvtK43F-K0YgS_qvkg4JrWJD7Yu0vBcs8yfZcfwCm47T=s1600`}/>
                <WorkImage image_src={`https://lh3.googleusercontent.com/drive-viewer/AFGJ81pg8jv1lFAJnap2IT60BJqoQM_Z10VWl66q3qdzxIeyzbk90j3GAT1uVCN2TE_7a7hbJMPQN9ANGUR-kCe6jH3BaKg74w=s1600`}/>
                <WorkImage image_src={`https://lh3.googleusercontent.com/drive-viewer/AFGJ81p-yFOBLFTNCPTDvVDl2wRC-4kuclyAMQODSgssM7g_CRM5xs9UAOxrMiYrY5otIDYc33Zh1-FZTrBVi6YDwuByO6GMAw=s1600`}/>
                  
                <WorkLink link={`https://www.figma.com/file/5fLu3hxkbpDzycLXdQwSCa/Masters-Union?node-id=1%3A22522&t=H26FR11n9l24sSmo-1`} />
                
            </div>
    
          </section>
    
          </Layout>
        </>
      );
    
}

export default masters_union