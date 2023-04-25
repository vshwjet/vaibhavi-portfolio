import React from 'react'

import { MongoClient } from 'mongodb';
import Image from 'next/image';
import Link from 'next/link';



export async function getStaticProps(context) {

    const mongoClient =  new MongoClient('mongodb+srv://vaibhaviportfolio:1JyDN06JZaL154DY@cluster0.jyulll4.mongodb.net/?retryWrites=true&w=majority');
    const data = await mongoClient.db('vaibhavi').collection('work').find({}).toArray();
    const finalData = JSON.parse(JSON.stringify(data));
    
    return {
      props: {work_single : finalData}, // will be passed to the page component as props
    }
}

function WorkPage({ work_single }) {
  return (
    <div>
        {work_single.map(work => (
            <div key={work._id}>
                <Link href={`/work/${work._id.toString()}`}>
                <p>{work.work_name}</p>
                <Image src={`${work.work_thumbnail}`} alt="Menu Icon" width={500} height={300} />
                </Link>

            </div>
        ))}
    </div>

  )
}

export default WorkPage