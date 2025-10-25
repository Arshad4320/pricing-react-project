import React from "react";

const ProductForm = ({ setProduct, product }) => {
  const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const newProduct = {
      name,
      price,
      quantity,
    };
    setProduct([...product, newProduct]);
  };
  return (
    <div>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="name" placeholder="name" />
        <br />
        <input type="text" name="price" placeholder="price" />
        <br />
        <input type="text" name="quantity" placeholder="quantity" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default ProductForm;
