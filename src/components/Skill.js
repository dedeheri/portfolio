import React from "react";

// image
import { reactLogo, nodejsLogo } from "../image";

function Skill() {
  return (
    <div className="bg-[#1F1F1F] p-10 rounded-2xl md:flex md:justify-between space-y-6 md:space-y-0">
      <h1 className="font-medium text-2xl md:text-3xl lg:text-4xl self-center">
        Skill
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="bg-[#1695A6] bg-opacity-5 p-5 rounded-2xl md:w-[18rem] space-y-10 w-full">
          <img src={reactLogo} alt="logo" className=" mx-auto" />
          <h1 className="text-xl text-center">React Js</h1>
        </div>

        <div className="bg-[#8CC84B] bg-opacity-5 p-5 rounded-2xl md:w-[18rem] space-y-10 w-full">
          <img src={nodejsLogo} alt="logo" className="h-[14rem] mx-auto" />
          <h1 className="text-xl text-center">React Js</h1>
        </div>
      </div>
    </div>
  );
}

export default Skill;
