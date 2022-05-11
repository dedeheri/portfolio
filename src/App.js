import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Home from "./page/Home";
import Portfolio from "./page/Portfolio";

/* eslint eqeqeq: 0 */
function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route index path="portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
