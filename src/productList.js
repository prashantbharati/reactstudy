import React, { useState } from "react";
import Shopping from "./components/Shoppinglist/Shopping";
import Form from "./components/Form/Form";
const ProductList = () => {
  const dummy_product = [
    {
      img: "https://images.unsplash.com/photo-1680169287995-9b7b4642eba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      heading: "Mountain backs",
      details: "great mountain view",
    },
    {
      img: "https://images.unsplash.com/photo-1680070568461-0342ba529988?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      heading: "Piano",
      details: "great instrument",
    },
    {
      img: "https://images.unsplash.com/photo-1679926591722-79bff79c561a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      heading: "Room",
      details: "great room available",
    },
  ];

  const [products, setProducts] = useState(dummy_product);

  return (
    <div>
      <Form products={products} setProducts={setProducts} />
      <Shopping products={products} />
    </div>
  );
};

export default ProductList;
