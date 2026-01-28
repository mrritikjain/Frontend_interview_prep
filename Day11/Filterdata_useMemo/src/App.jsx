import React, { useEffect, useMemo, useState } from "react";
import "./App.css";

const App = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = useMemo(() => {
    return product.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [product, search]);

  return (
    <div className="container">
      <header>
        <h1>Product Explorer</h1>
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
      </header>

      <main>
        <div className="list-header">
          <h2>Available Products</h2>
          <span className="count">{filteredProducts.length} items found</span>
        </div>

        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Fetching products...</p>
          </div>
        ) : (
          <ul className="product-list">
            {filteredProducts.map((item) => (
              <li key={item.id} className="product-item">
                <div className="product-info">
                  <span className="product-title">{item.title}</span>
                  <span className="product-category">{item.category}</span>
                </div>
                <span className="product-price">${item.price}</span>
              </li>
            ))}
            {filteredProducts.length === 0 && !loading && (
              <p className="no-results">
                No products found matching "{search}"
              </p>
            )}
          </ul>
        )}
      </main>
    </div>
  );
};

export default App;
