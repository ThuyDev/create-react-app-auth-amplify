import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from "../../pages/PageNotFound";
import OderNewPage from "../../pages/OderNewPage";
import OderEditPage from "../../pages/OderEditPage";
import OderListPage from "../../pages/OrderListPage";

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<OderNewPage />} />
      <Route path="/order" element={<Navigate to="/" replace />} />
      <Route path="/order/:orderId" element={<OderEditPage />} />
      <Route path="/order-list" element={<OderListPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
