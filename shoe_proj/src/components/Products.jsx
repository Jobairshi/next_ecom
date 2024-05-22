"use client";
import React, { useEffect } from "react";
import axios, { all } from "axios";
import { useState } from "react";
import Sub_product from "@/app/products/Sub_product";

export default function Products() {
  const [allProduct, setAllProduct] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/product")
      .then((res) => {
        setAllProduct(res.data);
      }, [])
      .catch((err) => {
        console.log(err);
      });
  });
  // console.log(allProduct)
  return (
    <div className="grid grid-cols-4 gap-8 bg-gray-400">
      {allProduct.map((itr) => (
        <Sub_product key={itr.id} product={itr} />
      ))}
    </div>
  );
}
