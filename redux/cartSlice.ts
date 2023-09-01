import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CartState = {
  visible: boolean;
  products: any[];
  sum: number;
};

const initialState: CartState = {
  visible: false,
  products: [],
  sum: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<any>) => {
      state.products.push({ product: action.payload, amount: 1 });
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
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
    toggleVisibility: (state) => {
      state.visible = !state.visible;
    },
  },
});

export const {
  addProduct,
  calculateSum,
  toggleVisibility,
  deleteProduct,
  changeAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
