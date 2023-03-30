import React from "react";
import "./App.css";
import Card from "./components/Card/card";
import Product from "./components/Product/Product";
import ProductList from "./productList";
import Calculator from "./components/Shoppinglist/Calculator/Calculator";
import Shopping from "./components/Shoppinglist/Shopping";
import Happy from "./customhooks/Happy";

const App = () => {
  const name = "prashant";
  const age = 12;
  let fname = "karan";
  let lname = "singh";
  let islogin = true;

  return (
    // <div>
    //   {islogin && (
    //     <section className="maindiv">
    //       <div style={{ backgroundColor: "red" }}>{`${fname} ${lname}`}</div>
    //       <div>{fname + " " + lname}</div>
    //     </section>
    //   )}

    //   {/* Props */}
    //   <Card name="Prashant" age="12" />
    //   <Card name="karan" age="12" />
    // </div>
    // <Product />
    // <Shopping />
    // <ProductList />
    // <Calculator />
    <Happy />
  );
};

export default App;
