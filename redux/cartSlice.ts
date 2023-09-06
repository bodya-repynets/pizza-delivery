import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CartState = {
  products: ProductType[];
  sum: number;
};

const initialState: CartState = {
  products: [],
  sum: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ItemFromSanity>) => {
      state.products.push({ product: action.payload, amount: 1 });
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (item) => item.product._id != action.payload
      );
    },
    changeAmount: (state, action: PayloadAction<any>) => {
      state.products = state.products.map((item) => {
        if (item.product._id === action.payload.id) {
          return { ...item, amount: item.amount + action.payload.num };
        } else {
          return item;
        }
      });
    },
    calculateSum: (state) => {
      const sum = state.products.reduce((sum, current) => {
        return sum + Number(current.product.price) * Number(current.amount);
      }, 0);
      state.sum = sum;
    },
  },
});

export const { addProduct, calculateSum, deleteProduct, changeAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
