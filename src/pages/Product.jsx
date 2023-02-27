import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const Product = () => {
  const { id } = useParams();
  const url = `https://63fc6844859df29986bbe4da.mockapi.io/api/v1/products/${id}`;
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
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{products.data.name}</h1>
        <div>
          <img src={products.data.images} alt={products.data.name} />
        </div>
        <div className="font-bold text-xl mb-3">$ {products.data.price}</div>
        <div>{products.data.desc}</div>
      </div>
    );
  }

  return <div className="p-2">{content}</div>;
};

export default Product;
