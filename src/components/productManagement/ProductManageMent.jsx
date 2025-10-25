import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./productTable";

const ProductManageMent = () => {
  const [product, setProduct] = useState([]);
  console.log(product);
  return (
    <div>
      <ProductForm setProduct={setProduct} product={product} />
      <ProductTable product={product} />
    </div>
  );
};

export default ProductManageMent;
