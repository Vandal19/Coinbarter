import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productsReducer from "./features/productSlice";
import cartReducer, { sumTotal } from './features/cartSlice';
import { AuthProvider } from "./context/authProvider";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer
  },
});

// store.dispatch(productsFetch());
store.dispatch(sumTotal());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <AuthProvider> */}
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    {/* </AuthProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
