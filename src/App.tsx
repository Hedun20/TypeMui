import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Navigation from "./components/Navigation";
import MainPage from "./pages/MainPage";
import { ProductPage } from "./pages/ProductPage";
import SearchPage from "./pages/SearchPage";
import FeedbackPage from "./pages/FeedbackPage";
import Header from "./components/Header";



function App() {
return (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path={"/product/:id"} element={<ProductPage />} />
    <Route path={"/search"} element={<SearchPage />} />
    <Route path={"/product/feedback/:id"} element={<FeedbackPage />} />
  </Routes>
);
}

export default App;
