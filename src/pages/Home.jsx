import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import ProductsCard from "../components/ProductsCard";

const Home = () => {
  const url = `https://63fc6844859df29986bbe4da.mockapi.io/api/v1/products`;
  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false,
  });

  let content = null;

  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((response) => {
        setProducts({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch(() => {
        setProducts({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  if (products.loading) {
    content = <Loader />;
  }

  if (products.error) {
    content = <p>There was an error please refresh or try again later!</p>;
  }

  if (products.data) {
    content = products.data.map((product, key) => (
      <div key={key}>
        <ProductsCard product={product} />
      </div>
    ));
  }

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Best Sellers</h1>
      {content}
    </div>
  );
};

export default Home;
