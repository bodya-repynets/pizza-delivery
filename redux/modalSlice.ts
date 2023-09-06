import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export type ModalState = {
  visible: boolean;
  message: string;
  okay: boolean;
};
const initialState: ModalState = {
  visible: false,
  message: "",
  okay: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<string>) => {
      state.okay = false;
      state.visible = true;
      state.message = action.payload;
    },
    closeModal: (state) => {
      state.visible = false;
      state.message = "";
    },
    confirm: (state) => {
      state.okay = true;
    },
  },
});
export const { setModal, closeModal, confirm } = modalSlice.actions;
export default modalSlice.reducer;
