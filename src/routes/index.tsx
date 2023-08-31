import { Routes, Route, Navigate } from "react-router-dom";

import Home from "@/pages/Home";
import SearchPage from "@/pages/SearchPage";
import PurchasePage from "@/pages/PurchasePage";
import NotFound from "@/pages/NotFound";

import PrivateRoute from "./PrivateRoute";

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home title="SwiftMart" />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route
          path="/purchase"
          element={<PurchasePage title="SwiftMart — Finalizar compra" />}
        />
      </Route>
      <Route path="/404" element={<NotFound title="SwiftMart — Not Found" />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}
