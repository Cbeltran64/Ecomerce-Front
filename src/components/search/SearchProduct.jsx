import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SearchProduct.css";
import { Link } from "react-router-dom";
import Productos from "./ProductSearch.jsx";

const SearchProduct = ({ addToCart }) => {
  const { search } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/v1/products/filterByKeyword?keyword=${search}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [search]);

  return (
    <>
      <div className="search-product">
        <div className="container">
          <div className="search-product-box">
            <Productos productos={products} />
            <h1>Resultado de busquedad de "{search}"</h1>
            <ul>
              {products.map((product) => (
                <li key={product.id} className="product">
                  <Link to={{
                    pathname: `/product/${product.id}`,
                    state: { product: product }
                  }}>
                    <img src={`../images/shops/${product.imageUrl}`} alt={product.name} className="product-image" />
                    <div className="product-info">
                      <h2>{product.name}</h2>
                      <p>{product.description}</p>
                      <div>
                        <p>Precio: ${product.price}</p>
                      </div>
                    </div>
                  </Link>
                  <button onClick={() => addToCart(product)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchProduct;