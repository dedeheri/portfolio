import React from "react";

import Accordion from "./Accordion";

function Card({ image, title, demo, technology }) {
  return (
    <div>
      <img className="h-60 w-full rounded-xl pt-6" src={image} alt={image} />
      <div className="md:col-span-2  space-y-2">
        <h1 className="text-2xl">{title}</h1>
        {/* accrodion */}
        <div>
          <Accordion
            name={technology.backend.backendName}
            library={technology.backend?.library}
          />
          <Accordion
            name={technology.frontend.frontendName}
            library={technology.frontend?.library}
          />
        </div>
        <div>
          <a
            href={demo}
            target="_blank"
            className="text-[#4F8CB9] italic hover:underline"
          >
            {demo}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
