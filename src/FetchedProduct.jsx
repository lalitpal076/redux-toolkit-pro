export default function FetchedProduct({ product,onAddToCart  }) {

  return (
      <div className="product-card">
      <div className="product-image">
        <img
          src={product.thumbnail}
          alt={product.title}
        />
      </div>

      <div className="product-info">
        <span className="category">
          {product.category}
        </span>

        <h3>{product.title}</h3>

        <p className="brand">
          Brand: {product.brand || "N/A"}
        </p>

        <div className="product-details">
          <span className="price">
            ${product.price}
          </span>

          <span className="rating">
            ⭐ {product.rating}
          </span>
        </div>

        <div className="product-details">
          <span>Stock: {product.stock}</span>

          <span
            className={
              product.availabilityStatus === "In Stock"
                ? "in-stock"
                : "out-stock"
            }
          >
            {product.availabilityStatus}
          </span>
        </div>
        <button
          className="add-cart-btn"
          onClick={() => onAddToCart(product)}
        >
          🛒 Add To Cart
        </button>
      </div>
    </div>
  )
}
