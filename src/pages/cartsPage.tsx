// components/Cart.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { updateCart, removeCart, addToCart } from '../store/cartSlice';

export default function Cart() {
  const cartItems = useAppSelector((state) => state.cart.items);   // { productId: qty }
  const products = useAppSelector((state) => state.product.byId); // full product details
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Seed the cart with a couple of items once on mount, for quick testing.
  // Cleanup undoes the seed so React StrictMode's dev-only double-invoke
  // (mount -> cleanup -> mount) doesn't double the quantities.
    useEffect(()=>{
        dispatch(addToCart({id:"p2"}))
    },[])
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
    <div className="flex-1 border-l border-gray-300 pl-4 flex flex-col">
      <h2 className="flex items-center gap-2 mb-3">
        <button
          className="flex items-center bg-transparent border-none cursor-pointer p-1"
          onClick={() => navigate("/productpage")}
          aria-label="Back to products"
        >
          <ArrowLeft size={28} strokeWidth={2.5} />
        </button>
        Cart
        {lines.length > 0 && (
          <span className="bg-[#ffd60a] rounded-full min-w-[22px] h-[22px] px-1.5 inline-flex items-center justify-center text-xs font-bold">
            {lines.length}
          </span>
        )}
      </h2>

      {lines.length === 0 ? (
        <p className="text-gray-400 italic">Your cart is empty</p>
      ) : (
        <ul className="list-none m-0 p-0 flex flex-col gap-2">
          {lines.map((l) => (
            <li
              className="flex items-center gap-2.5 p-2.5 border border-gray-200 rounded-lg bg-gray-50"
              key={l.id}
            >
              <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                <span className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                  {l.name}
                </span>
                <span className="text-xs text-gray-500">₹{l.price} each</span>
              </div>

              <input
                className="w-[50px] p-1 border border-gray-300 rounded text-center"
                type="number"
                min={0}
                max={l.stock} // can't order more than what's in stock
                value={l.qty}
                onChange={(e) =>
                  dispatch(updateCart({ id: l.id, qty: Number(e.target.value) }))
                }
              />

              <span className="min-w-[64px] text-right font-semibold">₹{l.lineTotal}</span>

              <button
                className="flex items-center justify-center bg-transparent border border-gray-300 rounded-md w-7 h-7 cursor-pointer text-gray-500 hover:bg-red-50 hover:border-red-300 hover:text-red-700"
                onClick={() => dispatch(removeCart({ id: l.id }))}
                aria-label={`Remove ${l.name} from cart`}
              >
                <X size={16} />
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-300 text-lg font-bold">
        <span>Total</span>
        <span className="text-green-700">₹{grandTotal}</span>
      </div>
    </div>
  );
}