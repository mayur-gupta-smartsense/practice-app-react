// components/Cart.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { updateCart, removeCart, addToCart } from '../store/cartSlice';
import "./css/product.css"

export default function Cart() {
  const cartItems = useAppSelector((state) => state.cart.items);   // { productId: qty }
  const products = useAppSelector((state) => state.product.byId); // full product details
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Seed the cart with a couple of items once on mount, for quick testing.
  // Cleanup undoes the seed so React StrictMode's dev-only double-invoke
  // (mount -> cleanup -> mount) doesn't double the quantities.

  // Combine cart quantities with live product data to build each cart row.
  // We calculate this fresh every render, so if price/stock changes live,
  // the cart total updates automatically without any extra code.
  const lines = Object.entries(cartItems)
    .map(([productId, qty]) => {
      const product = products[productId];
      if (!product) return null; // just in case the product doesn't exist anymore
      return { ...product, qty, lineTotal: product.price * qty };
    })
    .filter((l): l is NonNullable<typeof l> => l !== null); // remove any nulls

  // Add up all line totals to get the final cart total
  const grandTotal = lines.reduce((sum, l) => sum + l.lineTotal, 0);

  return (
    <div className="cart">
      <h2 className="cart-heading">
        <button
          className="cart-back"
          onClick={() => navigate("/productpage")}
          aria-label="Back to products"
        >
          ←
        </button>
        Cart
        {lines.length > 0 && <span className="cart-count">{lines.length}</span>}
      </h2>

      {lines.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        <ul className="cart-lines">
          {lines.map((l) => (
            <li className="cart-line" key={l.id}>
              <div className="cart-line-info">
                <span className="cart-line-name">{l.name}</span>
                <span className="cart-line-price">₹{l.price} each</span>
              </div>

              <input
                className="cart-line-qty"
                type="number"
                min={0}
                max={l.stock} // can't order more than what's in stock
                value={l.qty}
                onChange={(e) =>
                  dispatch(updateCart({ id: l.id, qty: Number(e.target.value) }))
                }
              />

              <span className="cart-line-total">₹{l.lineTotal}</span>

              <button
                className="cart-line-remove"
                onClick={() => dispatch(removeCart({ id: l.id }))}
                aria-label={`Remove ${l.name} from cart`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="cart-total">
        <span>Total</span>
        <span className="cart-total-amount">₹{grandTotal}</span>
      </div>
    </div>
  );
}