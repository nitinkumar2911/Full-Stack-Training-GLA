import {use, useEffect, useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./App.css";
function App() {
  const [product, setProducts] = useState([]);
  useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setProducts(data);
    });
}, []);

  return (
    <>
      <Header />
     <main className="container">
  {product.map((product) => {
    return (
      <Card
        key={product.id}
        product={product}
      />
    );
  })}
</main>
      <Footer/>

  </>
  );
}

export default App;
