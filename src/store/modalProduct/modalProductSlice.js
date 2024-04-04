import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modalProduct',
  initialState: {
    isOpen: false,
    id: 0,
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.id = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
