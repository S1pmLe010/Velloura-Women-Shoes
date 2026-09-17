import products from "@/data/products.json";
import Link from "next/link";
import AddToBag from "@/components/AddToBag";

export function generateStaticParams() {
  return products.map((product) => ({
    id: String(product.id),
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  return {
    title: product
      ? `${product.name} | VELLOURA`
      : "Product | VELLOURA",
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="empty-state product-not-found">
        <span>V</span>

        <h2>Piece not found.</h2>

        <p>
          This Velloura piece could not be found.
        </p>

        <Link href="/shop">
          Return to collection →
        </Link>
      </main>
    );
  }

  return (
    <main className="product-page">
      <section className="product-detail">
        {/* IMAGE */}
        <div className="product-detail-image">
          {product.image ? (
            <img
              src={product.image}
              alt={`${product.brand} ${product.name}`}
            />
          ) : (
            <div className="product-image-placeholder">
              <span>VELLOURA</span>
            </div>
          )}
        </div>

        {/* INFORMATION */}
        <div className="product-detail-info">
          <span className="product-detail-brand">
            {product.brand}
          </span>

          <h1>{product.name}</h1>

          <div className="product-detail-price">
            $
            {Number(product.price).toLocaleString()}
          </div>

          <p className="product-detail-description">
            {product.description}
          </p>

          {/* SIZE */}
          {product.sizes?.length > 0 && (
            <div className="product-size-section">
              <div className="product-section-label">
                <span>SIZE</span>

                <button type="button">
                  Size guide
                </button>
              </div>

              <div className="sizes">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className="size"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ADD TO BAG */}
          <div className="product-add-wrapper">
            <AddToBag product={product} />
          </div>

          {/* DETAILS */}
          <div className="product-details-block">
            <span className="product-section-label">
              DETAILS
            </span>

            <div className="product-detail-list">
              {product.material && (
                <div>
                  <span>Material</span>
                  <strong>{product.material}</strong>
                </div>
              )}

              {product.color && (
                <div>
                  <span>Color</span>
                  <strong>{product.color}</strong>
                </div>
              )}

              {product.category && (
                <div>
                  <span>Category</span>
                  <strong>{product.category}</strong>
                </div>
              )}

              {product.rating && (
                <div>
                  <span>Rating</span>
                  <strong>
                    {product.rating} / 5
                  </strong>
                </div>
              )}
            </div>
          </div>

          {/* SHIPPING INFO */}
          <div className="product-service-info">
            <div>
              <span>01</span>

              <div>
                <strong>Complimentary delivery</strong>
                <p>
                  Enjoy complimentary delivery
                  on your Velloura order.
                </p>
              </div>
            </div>

            <div>
              <span>02</span>

              <div>
                <strong>Luxury packaging</strong>
                <p>
                  Every piece arrives carefully
                  prepared in Velloura packaging.
                </p>
              </div>
            </div>

            <div>
              <span>03</span>

              <div>
                <strong>Customer care</strong>
                <p>
                  Our team is available to assist
                  with your purchase.
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/shop"
            className="back-to-shop"
          >
            ← Continue shopping
          </Link>
        </div>
      </section>
    </main>
  );
}