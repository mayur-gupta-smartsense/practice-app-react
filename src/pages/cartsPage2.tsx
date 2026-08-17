import { useAppSelector, useAppDispatch } from "../store/hooks";
import { updateCart, removeCart } from "../store/cartSlice";


export default function CartsPage2() {
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
    

}