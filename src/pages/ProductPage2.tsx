import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { addToCart, updateCart } from "../store/cartSlice";
import "./css/product.css"

export default function ProducPpage2() {
    const products = useAppSelector(state => state.product.byId)
    const cart = useAppSelector(state => state.cart.items)
    const dispatch = useAppDispatch()

    return (
        <div>
            {Object.values(products).map((p) => {
                const qty = cart[p.id] || 0;
                return (
                    <div></div>
                )
            }
            )}
        </div>
    )
}