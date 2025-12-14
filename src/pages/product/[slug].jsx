import { useRouter } from "next/router";
import React from "react";

const ProductPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>Product Page</h1>
      <p>product : {query.slug}</p>
    </div>
  );
};

export default ProductPage;
