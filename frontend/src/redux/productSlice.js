import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    productList: [],
    cartItem: []
};
export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setDataProduct: (state, action) => {
            console.log(action);
            state.productList = [...action.payload];
        },
        addCartItem: (state, action) => {
            const check = state.cartItem.some(el => el._id === action.payload._id);
            if(check) {
                toast.warning("Item already in cart", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }else {
                const total = action.payload.price;
                state.cartItem = [...state.cartItem, {...action.payload, qty: 1, total: total}];
            }
        },
        deleteCartItem: (state, action) => {
            toast.success("Item deleted successfully", {
                position: toast.POSITION.TOP_RIGHT
            });
            const index = state.cartItem.findIndex((el) => el._id === action.payload);
            state.cartItem.splice(index, 1);
            console.log(index);

        },
        increaseQty: (state, action) => {
            const index = state.cartItem.findIndex((el) => el._id === action.payload);
            let qty = state.cartItem[index].qty;
            let qtyIncrease = ++qty
            state.cartItem[index].qty = qtyIncrease;
            let price = state.cartItem[index].price;
            let total = price * qtyIncrease;
            state.cartItem[index].total = total;
        },
        decreaseQty: (state, action) => {
            const index = state.cartItem.findIndex((el) => el._id === action.payload);
            let qty = state.cartItem[index].qty;
            if(qty > 1) {
                let qtyDecrease = --qty;
                state.cartItem[index].qty = qtyDecrease;
                let price = state.cartItem[index].price;
                let total = price * qtyDecrease;
                state.cartItem[index].total = total;
            }
        }
    }
});

export const {setDataProduct,addCartItem,deleteCartItem,increaseQty,decreaseQty} = productSlice.actions;
export default productSlice.reducer;