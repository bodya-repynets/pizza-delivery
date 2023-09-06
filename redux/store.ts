import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import modalSlice from "./modalSlice";
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    modal: modalSlice,
  },
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
