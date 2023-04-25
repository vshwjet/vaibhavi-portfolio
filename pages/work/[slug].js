import React from "react";
import { MongoClient } from "mongodb";
import Image from "next/image";
import Head from "next/head";

var ObjectId = require("mongodb").ObjectId;

export async function getStaticPaths() {
  const mongoClient = new MongoClient(
    "mongodb+srv://vaibhaviportfolio:1JyDN06JZaL154DY@cluster0.jyulll4.mongodb.net/?retryWrites=true&w=majority"
  );
  const data = await mongoClient
    .db("vaibhavi")
    .collection("work")
    .find({})
    .toArray();
  const finalData = JSON.parse(JSON.stringify(data));

  const paths = finalData.map((work) => {
    return {
      params: { slug: work._id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.slug;

  const mongoClient = new MongoClient(
    "mongodb+srv://vaibhaviportfolio:1JyDN06JZaL154DY@cluster0.jyulll4.mongodb.net/?retryWrites=true&w=majority"
  );
  const data = await mongoClient
    .db("vaibhavi")
    .collection("work")
    .find({ _id: new ObjectId(`${id}`) })
    .toArray();
  const workSingle = JSON.parse(JSON.stringify(data));

  return {
    props: { work_single: workSingle },
  };
}

function WorkSingle({ work_single }) {
  return (
    <div>
      {work_single.map((work_item) => (
        <div key={work_item._id}>
          <Head>
            <title>viceversa</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1>{work_item.work_name}</h1>
          <Image
            src={`${work_item.work_thumbnail}`}
            alt="Menu Icon"
            width={500}
            height={300}
          />
        </div>
      ))}
    </div>
  );
}

export default WorkSingle;
