"use client";
import React from "react";
import { useState } from "react";
import Per_Product from "./Per_Product";
import axios from "axios";
export default function Productshow() {
  const [allProduct, setAllProduct] = useState([]);
  axios
    .get("http://localhost:4000/product")
    .then((res) => {
      setAllProduct(res.data);
    }, [])
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="container">
      <section className="bg-white  py-12 text-gray-700  lg:py-20 text-center">
        <h2 className="font-serif text-2xl font-bold sm:text-3xl ">
          On Sale &amp; Shoes
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {allProduct.slice(0,3).map((itr) => (
            <div key={itr.id}>
              <Per_Product prod = {itr} key={itr.id}/>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
