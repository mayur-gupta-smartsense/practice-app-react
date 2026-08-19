import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { updateCart, removeCart } from "../store/cartSlice";
// import "./css/product2.css"

export default function CartsPage2() {
    const [line1Qty, setLine1Qty] = useState(1);
    const products = useAppSelector(state => state.product.byId)
    const cart = useAppSelector(state => state.cart.items)
    const dispatch = useAppDispatch()

    const lines = Object.keys(cart).map((productId) => {
        const qty = cart[productId]
        const product = products[productId]
        if (!product) return null;
        return { ...product, qty, lineTotal: product.price * qty }
    }).filter((l): l is NonNullable<typeof l> => l !== null);
    const grandTotal = lines.reduce((sum, { lineTotal })=> sum + lineTotal, 0);
    return (
        <div style={{flex: '1', borderLeft:'1px solid #ddd', paddingLeft:'16px',display:'flex',flexDirection:'column' }}>
            <h2 className="cart-heading">
                <button className="cart-back">
                  ← 
                </button>
                Cart
                {lines.length > 0 && <span className="cart-count"> {lines.length} </span>}
            </h2>
            <p className=""> </p>
            <ul className="cart-lines">
                {lines.map((l)=>(
                <li>
                    <div>
                        <span>

                        </span>
                        <span>

                        </span>
                    </div>
                    <input type="text" />
                    <span></span>
                    <button></button>
                </li>
                ))}
                </ul>
                <div>
                    <span>

                    </span>
                    <span>

                    </span>
                    <div>

                    </div>
                </div>
            
        </div>
    )
    


}
