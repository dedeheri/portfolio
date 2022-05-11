import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="w-full h-full bg-[#1B1B1B] font-poppin">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <Navbar />
        <div className="text-white mt-20">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
