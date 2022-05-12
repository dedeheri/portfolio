import React from "react";

// animate
import "animate.css";

// image
import { radius1, radius2 } from "../image";

function Banner() {
  return (
    <div className="md:flex md:justify-between">
      {/* left */}
      <div className="-space-y-3">
        <div className="flex items-center">
          <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold">Hello</h1>
          <div className="text-3xl md:text-5xl lg:text-6xl animate__animated animate__wobble animate__slow animate__infinite">
            👋🏻
          </div>
          <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold">
            , Saya
          </h1>
        </div>
        <h1 className="md:text-[7.5rem] text-[4.5rem] font-bold ">Dede Heri</h1>

        <div className=" flex">
          <div className="pt-2 -space-y-2 z-50">
            <h1 className="md:text-2xl text-xl text-[#BCBCBC]">
              Full Stack Developer
            </h1>
            <h1 className="md:text-2xl text-xl text-[#BCBCBC]">
              and Web Designer
            </h1>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="space-y-5 hidden md:block">
        <img
          src={radius1}
          alt={"radius"}
          className="w-32 animate__animated animate__slow animate__infinite animate__rotateIn"
        />
        <img
          src={radius2}
          alt={"radius"}
          className="ml-36 w-32 animate__animated animate__slower animate__infinite animate__rotateIn"
        />
      </div>
    </div>
  );
}

export default Banner;
