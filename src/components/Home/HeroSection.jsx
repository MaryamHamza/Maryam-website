import React from "react";
import Row from "../common/Row";

const HeroSection = () => {
  return (
    <div className="w-full px-[10%] py-[90px]">
      <Row className="w-full items-center justify-between">
        <div className="width-[46%]">
          <h1 className="text-[74px] text-slate-950 font-light">Collections</h1>
          <p className="text-[30px] text-black mt-[50px]">
            You can explore and shop many products from different Collections
            and from various brands
          </p>
          <button className="h-[50px] w-[20%] text-white bg-black text-[20px] font-medium mt-[50px]">
            Shop Now
          </button>
        </div>
        <div className="w-[46%]">
          <div className="w-[424px] h-[542px] relative">
            <img
              className="animate-[wobble_10s_ease-in] w-full h-full rounded-tl-[160px] rounded-br-[160px]"
              src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
              alt="Hero"
            />
            <div className=" absolute animate-[wobble_10s_ease-in-out] w-full h-full rounded-tl-[160px] rounded-br-[160px] border-[2px] border-[#00000040] top-[20px] left-[18px] -z-[1]" />
          </div>
        </div>
      </Row>
    </div>
  );
};

export default HeroSection;
