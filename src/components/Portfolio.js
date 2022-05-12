import React from "react";
import { Link } from "react-router-dom";

// icons
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

import data from "../data.json";
import Card from "./Card";

function Portfolio() {
  return (
    <div>
      {/* title */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="font-medium text-2xl md:text-3xl lg:text-4xl self-center">
          Portfolio
        </h1>
        <Link
          className=" text-sm md:text-base lg:text-lg flex items-center space-x-2 group"
          to={"portfolio"}
        >
          <h1>Selengkapnya</h1>
          <ArrowNarrowRightIcon className=" w-5 md:w-8 translate-x-0 group-hover:translate-x-2 duration-300" />
        </Link>
      </div>

      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-3">
        {data?.slice(0, 3)?.map(({ id, image, title, demo, technology }) => (
          <Card
            key={id}
            image={image}
            title={title}
            demo={demo}
            technology={technology}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
