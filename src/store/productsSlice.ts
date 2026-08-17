import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Product = {
    id: string;
    name:string;
    stock:number;
    price:number;
}
const initialState: Record<string, Record<string, Product>> = {
    byId:{
        p1:{id:"p1", name:"Earphones J3", stock: 34, price: 423},
        p2:{id:"p2", name:"Note1 S3", stock: 34, price: 423},
        p3:{id:"p3", name:"Denver Deo", stock: 34, price: 423}
    }
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        stockPriceUpdate:(state, action: PayloadAction<{id: string, name: string, stock: number, price:number}>)=>{
                const { id, name, stock, price } = action.payload;
                const product = state.byId[id];
                if(product){
                      product.price = price;
                      product.stock = stock; 
                }

        }
    }

})

export const { stockPriceUpdate } = productSlice.actions;
export default productSlice.reducer;