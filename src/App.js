import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card/card";
import Product from "./components/Product/Product";
import ProductList from "./productList";
import Calculator from "./components/Shoppinglist/Calculator/Calculator";
import Shopping from "./components/Shoppinglist/Shopping";
import Happy from "./customhooks/Happy";
import Inputform from "./customhooks/Inputform";
import TodoApp from "./components/ToDOs/TodoApp/TodoApp";
import { Link, Routes, Route } from "react-router-dom";

const App = () => {
  const name = "prashant";
  const age = 12;
  let fname = "karan";
  let lname = "singh";
  let islogin = true;

  const [count, setCount] = useState(1);

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
    // <div>
    //   <div className="blockstyle">App</div>
    //   <Happy />
    // </div>
    // <Inputform />
    // <TodoApp />
    <div>
      <ul>
        <li>
          <Link to="/todo">TodoApp</Link>
        </li>
        <li>
          {" "}
          <Link to="/productlist">Shoppinglist</Link>
        </li>
        <li>
          {" "}
          <Link to="/calculator">Calculator</Link>
        </li>
      </ul>

      {/* {count === 1 && <TodoApp />}
      {count === 2 && <ProductList />}
      {count === 3 && <Calculator />} */}

      <Routes>
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
};

export default App;
