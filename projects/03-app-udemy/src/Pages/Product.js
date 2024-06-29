import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";

function Product() {
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;
  const [product, setProduct] = useState({
    loading: false,
    data: null,
  });
  useEffect(() => {
    setProduct({ loading: true, data: null });
    axios.get(url).then((res) => setProduct({ loading: false, data: res.data }));
    // console.log(product.data);
  }, [url]);

  if (product.loading) return <Loader />;

  return (
    <div className="p-3">
      <h1 className="text-xl font-bold">{product.data?.title}</h1>
      <p>{product.data?.description}</p>
      <p className="font-bold text-blue-950">
        {product?.price ? "$" + product.data?.price : ""}
      </p>
      <img className="max-h-[400px]" src={product.data?.image} alt="" />
    </div>
  );
}

export default Product;
