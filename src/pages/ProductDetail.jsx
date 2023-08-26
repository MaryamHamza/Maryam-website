import React from "react";
import BottomHeader from "../components/Header/BottomHeader";
import Footer from "../components/Footer";
import TopHeader from "../components/Header/TopHeader";

const ProductDetails = () => {
  return (
    <div className="w-full bg-[#1e28320d] h-[60px]">
      <TopHeader />
      <BottomHeader />
      <h1>Welcome to product detail</h1>
      <Footer />
    </div>
  );
};

export default ProductDetails;
