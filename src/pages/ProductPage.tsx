// components/ProductPage.tsx
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { addToCart, updateCart } from '../store/cartSlice';
import "./css/product.css";

export default function ProductPage() {
  // Read the list of products from the store
  const products = useAppSelector((state) => state.product.byId);
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  // When this page loads, start checking for live prie/stock updates.
  // When it unloads (user leaves the page), stop checking — this avoids wasting resources.

  return (
    <div className="product-grid">
      {Object.values(products).map((p) => {
        const qty = cartItems[p.id] || 0;

        return (
          <div className="product-card" key={p.id}>
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <p className={p.stock === 0 ? 'out-of-stock' : 'in-stock'}>
              {p.stock === 0 ? 'Out of stock' : `${p.stock} left`}
            </p>
            {qty === 0 ? (
              <button
                className="add-to-cart-btn"
                disabled={p.stock === 0} // can't add if nothing left in stock
                onClick={() => dispatch(addToCart({ id: p.id, qty: 1 }))}
              >
                Add to cart
              </button>
            ) : (
              <div className="qty-stepper">
                <button
                  className="qty-btn"
                  onClick={() => dispatch(updateCart({ id: p.id, qty: qty - 1 }))}
                >
                  -
                </button>
                <span className="qty-value">{qty}</span>
                <button
                  className="qty-btn"
                  disabled={qty >= p.stock} // can't add more than what's in stock
                  onClick={() => dispatch(updateCart({ id: p.id, qty: qty + 1 }))}
                >
                  +
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}