import React from 'react'
import Link from "next/link";
import Image from "next/image";
import styles from "../Work/Work.module.css";
import { work_data } from "../../data/workData"


function Work() {
  return (
    <>
        <div className={`${styles.work_container} width`}>
            <div className={styles.work_wrapper}>
                <div className={styles.work_heading}>
                    <h3>Recent Work</h3>
                </div>
                <div className={styles.work_fields}>
                    {work_data.map((work) => (
                        <div key={work.id} className={styles.work_thumbnail}>
                            <a href={work.work_url}>
                            <Image src={work.work_image} width={370} height={442} alt={work.work_name} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Work