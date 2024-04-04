import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './category/categorySlice';
import productReducer from './product/productSlice';
import modalDeliveryReducer from './modalDelivery/modalDeliverySlice';
import modalProductReducer from './modalProduct/modalProductSlice';
import formReducer from './form/formSlice';
import orderReducer, { localStorageMiddleware } from './order/orderSlice';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    order: orderReducer,
    modalDelivery: modalDeliveryReducer,
    modalProduct: modalProductReducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
