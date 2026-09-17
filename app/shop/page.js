"use client";

import { useMemo, useState } from "react";
import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const brands = [
    "All",
    ...new Set(products.map((product) => product.brand)),
  ];

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search.trim()) {
      const query = search.toLowerCase().trim();

      result = result.filter((product) =>
        [
          product.name,
          product.brand,
          product.category,
          product.description,
        ]
          .filter(Boolean)
          .some((value) =>
            value.toLowerCase().includes(query)
          )
      );
    }

    if (brand !== "All") {
      result = result.filter(
        (product) => product.brand === brand
      );
    }

    if (category !== "All") {
      result = result.filter(
        (product) => product.category === category
      );
    }

    if (sort === "price-low") {
      result.sort(
        (a, b) => Number(a.price) - Number(b.price)
      );
    }

    if (sort === "price-high") {
      result.sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
    }

    if (sort === "name") {
      result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;
  }, [search, brand, category, sort]);

  return (
    <main className="shop-page">
      <section className="shop-hero">
        <div>
          <span className="section-eyebrow">
            VELLOURA COLLECTION
          </span>

          <h1>
            Find your
            <em> perfect pair.</em>
          </h1>

          <p>
            Explore our curated collection of
            luxury women's footwear.
          </p>
        </div>
      </section>

      <section className="shop-content">
        <div className="shop-toolbar">
          <div className="shop-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search shoes, brands..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>

          <div className="shop-filters">
            <select
              value={brand}
              onChange={(e) =>
                setBrand(e.target.value)
              }
            >
              {brands.map((item) => (
                <option key={item} value={item}>
                  {item === "All"
                    ? "All Brands"
                    : item}
                </option>
              ))}
            </select>

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item === "All"
                    ? "All Styles"
                    : item}
                </option>
              ))}
            </select>

            <select
              value={sort}
              onChange={(e) =>
                setSort(e.target.value)
              }
            >
              <option value="featured">
                Featured
              </option>

              <option value="price-low">
                Price: Low to High
              </option>

              <option value="price-high">
                Price: High to Low
              </option>

              <option value="name">
                Name
              </option>
            </select>
          </div>
        </div>

        <div className="shop-result-info">
          <span>
            {filteredProducts.length} pieces
          </span>

          {search && (
            <span>
              Results for "{search}"
            </span>
          )}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products-grid shop-products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="empty-search">
            <span>V</span>

            <h2>
              Nothing found.
            </h2>

            <p>
              Try another product name,
              category or brand.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setBrand("All");
                setCategory("All");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}