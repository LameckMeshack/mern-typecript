import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.tsx";
import "./index.css";
import HomePage from "./Pages/HomePage.tsx";
import ProductPage from "./Pages/ProductPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StoreProvider } from "./Store.tsx";
import CartPage from "./Pages/CartPage.tsx";
import SigninPage from "./Pages/SigninPage.tsx";
import SignupPage from "./Pages/SignUpPage.tsx";
import ShippingAddressPage from "./Pages/ShippingAddressPage.tsx";
import PaymentMethodPage from "./Pages/PaymentMethodPage.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />} />
      <Route path="product/:slug" element={<ProductPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="signin" element={<SigninPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="" element={<ProtectedRoute />}>
        <Route path="shipping" element={<ShippingAddressPage />} />
        <Route path="payment" element={<PaymentMethodPage />} />
      </Route>
    </Route>
  )
);

const queryCLient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryCLient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
);
