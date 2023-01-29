import { useEffect, useState } from "react";
import "./Home.css";
import { Product } from "./Product/Product";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">
      <div className="homeRows">
        {products?.map((product) => (
          <div key={product.id} className="homeRow">
            <Product
              id={product.id}
              title={product.title}
              price={product.price}
              rating={Math.round(product.rating.rate)}
              image={product.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
