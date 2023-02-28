import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import ProductsCard from "../components/ProductsCard";
import { UseAxiosGet } from "../hooks/HttpReq";

const Home = () => {
  const url = `https://63fc6844859df29986bbe4da.mockapi.io/api/v1/products`;

  let products = UseAxiosGet(url);

  let content = null;

  if (products.loading) {
    content = <Loader />;
  }

  if (products.error) {
    content = <p>There was an error please refresh or try again later!</p>;
  }

  if (products.data) {
    content = products.data.map((product, key) => (
      <li className="w-full md:w-1/2 p-2 " key={key}>
        <ProductsCard product={product} />
      </li>
    ));
  }

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Best Sellers</h1>
      <ul className="flex flex-row flex-wrap">{content}</ul>
    </div>
  );
};

export default Home;
