import React from "react";
import Product from "../Product/Product";
const Shopping = (props) => {
  return (
    <div>
      {props.products.map((productvalue) => {
        return (
          <Product
            img={productvalue.img}
            heading={productvalue.heading}
            details={productvalue.details}
          />
        );
      })}

      {/* <Product
        img="https://images.unsplash.com/photo-1680169287995-9b7b4642eba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        heading="Mountain backs"
        details="great mountain view"
      /> */}
    </div>
  );
};

export default Shopping;
