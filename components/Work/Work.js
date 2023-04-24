import React from 'react'
import Link from "next/link";
import Image from "next/image";
import styles from "../Work/Work.module.css";
import flow_pattern from "../../assets/flow.svg"


const work_data = [
    {
        id: 1,
        work_name : "masters_union",
        work_image : "/static/work/masters_union.png",
        work_url : "/work/masters_union"
    },
    {
        id: 2,
        work_name : "sex_toy",
        work_image : "/static/work/sex_toy.png",
        work_url : "/work/sex_toy"
    },
    {
        id: 3,
        work_name : "modern_school",
        work_image : "/static/work/modern_school.png",
        work_url : "/work/modern_school"
    },
    {
        id: 4,
        work_name : "masters_union",
        work_image : "/static/work/masters_union.png",
        work_url : "/work/masters_union"
    },
    {
        id: 5,
        work_name : "masters_union",
        work_image : "/static/work/masters_union.png",
        work_url : "/work/masters_union"
    },
    {
        id: 6,
        work_name : "masters_union",
        work_image : "/static/work/masters_union.png",
        work_url : "/work/masters_union"
    },
]

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
                            <a href="">
                            <Image src={work.work_image} width={370} height={442} alt={work.work_name} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <Image className={styles.flow_pattern_work} src={flow_pattern} alt="Flow Pattern" />

        </div>
    </>
  )
}

export default Work