"use client";

import { useEffect, useState } from "react";
import products from "@/data/products.json";

export default function Admin() {
  const [authorized, setAuthorized] = useState(false);
  const [orders, setOrders] = useState(128);

  useEffect(() => {
    const access = sessionStorage.getItem("velloura-admin");

    if (access === "true") {
      setAuthorized(true);
    }
  }, []);

  const unlockAdmin = () => {
    const code = window.prompt("Enter admin password");

    if (code === "velloura") {
      sessionStorage.setItem("velloura-admin", "true");
      setAuthorized(true);
    } else if (code !== null) {
      alert("Incorrect password");
    }
  };

  const logout = () => {
    sessionStorage.removeItem("velloura-admin");
    setAuthorized(false);
  };

  const brands = [...new Set(products.map((product) => product.brand))];

  if (!authorized) {
    return (
      <main className="admin-lock">
        <div className="admin-lock-card">
          <div className="admin-mark">V</div>

          <span className="eyebrow">VELLOURA / PRIVATE</span>

          <h1>Welcome back.</h1>

          <p>
            The Velloura administration area is reserved for the house team.
          </p>

          <button
            className="button button-dark admin-enter"
            onClick={unlockAdmin}
          >
            Enter dashboard
          </button>

          <span className="admin-note">
            Secure local workspace
          </span>
        </div>
      </main>
    );
  }

  return (
    <main className="admin-page">

      {/* HEADER */}
      <section className="admin-header">
        <div>
          <span className="eyebrow">VELLOURA / CONTROL ROOM</span>

          <h1>Dashboard</h1>

          <p>
            Manage the Velloura collection and monitor your store.
          </p>
        </div>

        <button
          className="admin-logout"
          onClick={logout}
        >
          Log out
        </button>
      </section>

      {/* STATS */}
      <section className="stats-grid">

        <div className="stat-card">
          <span>PRODUCTS</span>
          <strong>{products.length}</strong>
          <small>Available pieces</small>
        </div>

        <div className="stat-card">
          <span>BRANDS</span>
          <strong>{brands.length}</strong>
          <small>Luxury houses</small>
        </div>

        <div className="stat-card">
          <span>ORDERS</span>
          <strong>{orders}</strong>
          <small>Current orders</small>
        </div>

        <div className="stat-card">
          <span>REVENUE</span>
          <strong>$48.6K</strong>
          <small>Current period</small>
        </div>

      </section>

      {/* CONTENT */}
      <section className="admin-content">

        {/* PRODUCTS */}
        <div className="admin-panel">

          <div className="admin-panel-head">
            <div>
              <span className="eyebrow">COLLECTION</span>
              <h2>Recent products</h2>
            </div>

            <span className="admin-count">
              {products.length} pieces
            </span>
          </div>

          <div className="admin-product-list">

            {products.slice(0, 8).map((product) => (
              <div
                className="admin-product"
                key={product.id}
              >
                <img
                  src={product.image}
                  alt={product.name}
                />

                <div className="admin-product-info">
                  <span>{product.brand}</span>

                  <h3>{product.name}</h3>

                  <small>
                    {product.category} · {product.material}
                  </small>
                </div>

                <strong>
                  ${product.price.toLocaleString()}
                </strong>
              </div>
            ))}

          </div>

        </div>

        {/* SIDE */}
        <aside className="admin-side">

          <div className="admin-panel quick-panel">

            <span className="eyebrow">QUICK ACTIONS</span>

            <h2>Store tools</h2>

            <button className="admin-action">
              + Add product
            </button>

            <button className="admin-action">
              Manage collection
            </button>

            <button className="admin-action">
              View orders
            </button>

            <button className="admin-action">
              Store settings
            </button>

          </div>

          <div className="admin-panel brand-panel">

            <span className="eyebrow">BRAND MIX</span>

            <h2>Luxury houses</h2>

            <div className="brand-stat-list">

              {brands.map((brand) => {
                const count = products.filter(
                  (product) => product.brand === brand
                ).length;

                return (
                  <div
                    className="brand-stat"
                    key={brand}
                  >
                    <span>{brand}</span>

                    <div className="brand-bar">
                      <i
                        style={{
                          width: `${Math.min(
                            count * 18,
                            100
                          )}%`,
                        }}
                      />
                    </div>

                    <small>{count}</small>
                  </div>
                );
              })}

            </div>

          </div>

        </aside>

      </section>

      {/* FOOTER STATUS */}
      <section className="admin-status">

        <div>
          <span className="status-dot" />
          System operational
        </div>

        <span>
          Velloura Admin · Local workspace
        </span>

      </section>

    </main>
  );
}