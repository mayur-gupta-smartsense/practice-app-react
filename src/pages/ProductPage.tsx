// components/ProductPage.tsx
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { addToCart, updateCart } from '../store/cartSlice';

export default function ProductPage() {
  // Read the list of products from the store
  const products = useAppSelector((state) => state.product.byId);
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  // When this page loads, start checking for live prie/stock updates.
  // When it unloads (user leaves the page), stop checking — this avoids wasting resources.

  return (
    <div className="grid grid-cols-2 gap-3 flex-[2]">
      {Object.values(products).map((p) => {
        const qty = cartItems[p.id] || 0;

        return (
          <div className="border border-gray-300 rounded-lg p-3" key={p.id}>
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <p className={p.stock === 0 ? 'text-red-600' : 'text-green-600'}>
              {p.stock === 0 ? 'Out of stock' : `${p.stock} left`}
            </p>
            {qty === 0 ? (
              <button
                className="bg-[#ffd60a] border border-[#e6c200] rounded-md px-3 py-1.5 cursor-pointer disabled:bg-[#f2e9c4] disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed"
                disabled={p.stock === 0} // can't add if nothing left in stock
                onClick={() => dispatch(addToCart({ id: p.id, qty: 1 }))}
              >
                Add to cart
              </button>
            ) : (
              <div className="flex items-center gap-2.5 bg-[#ffd60a] border border-[#e6c200] rounded-md p-1 w-fit">
                <button
                  className="bg-white border border-[#e6c200] rounded w-6 h-6 leading-none cursor-pointer disabled:bg-[#f2e9c4] disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed"
                  onClick={() => dispatch(updateCart({ id: p.id, qty: qty - 1 }))}
                >
                  -
                </button>
                <span className="min-w-[16px] text-center font-bold">{qty}</span>
                <button
                  className="bg-white border border-[#e6c200] rounded w-6 h-6 leading-none cursor-pointer disabled:bg-[#f2e9c4] disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed"
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