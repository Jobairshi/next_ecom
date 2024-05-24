"use client";
import React, { useEffect } from "react";
import { useState } from "react";

import axios from "axios";
import ProDelete from "../ProdDelete";
import Layout from "../Layout";
export default function ProductsMan() {
  const [allProduct, setAllProduct] = useState([]);
  useEffect(()=>{
    axios
    .get("http://localhost:4000/product")
    .then((res) => {
      setAllProduct(res.data);
    }, [allProduct])
    .catch((err) => {
      console.log(err);
    });
  })

  return (
    <Layout>
      <div className="container">
      <section className="bg-white  py-12 text-gray-700  lg:py-20 text-center">
        <h2 className="font-serif text-2xl font-bold sm:text-3xl ">
          On Sale &amp; Shoes
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {allProduct.map((itr) => (
            <div key={itr.id}>
              <ProDelete prod = {itr} key={itr.id}/>
            </div>
          ))}
        </div>
      </section>
    </div>
    </Layout>
  );
}
