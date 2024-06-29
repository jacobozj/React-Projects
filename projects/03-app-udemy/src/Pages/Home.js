import {React, useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";
function Home() {
  const url = `https://fakestoreapi.com/products/`;
  const [products, setProducts] = useState({
    loading: false,
    data: null,
  });
  useEffect(() => {
    setProducts({ loading: true, data: null });
    axios
      .get(url)
      .then((res) => setProducts({ loading: false, data: res.data }));
    // console.log(products.data);
  }, [url]);

  if (products.loading) return <Loader />;
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Best sellers</h1>
      <div className="grid grid-cols-3 gap-6 p-3">
        {products.data?.map((product) => (
          <Link to={`/product/${product.id}`} className="text-center" key={product.id}>
            <img className="max-h-[300px]" src={product.image} alt="" />
            <p className="font-bold">{product.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
