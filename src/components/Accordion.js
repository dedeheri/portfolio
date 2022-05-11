import React from "react";

import { ChevronDownIcon } from "@heroicons/react/outline";

function Accordion({ name, library }) {
  return (
    <div className="relative overflow-hidden border-b border-[#303030] text-gray-300 hover:text-white duration-100">
      <input
        type="checkbox"
        className="peer absolute top-0 inset-x-0 w-full h-10 opacity-0 z-10 cursor-pointer"
      />
      <div className="h-9 w-full flex items-center">
        <h1>{name}</h1>
      </div>
      <div className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
        <ChevronDownIcon className="w-5" />
      </div>
      <div className="overflow-hidden transition-all duration-300 max-h-0 peer-checked:max-h-40">
        <div className="pl-4 pb-3 ">
          {library?.map((_) => (
            <h1 key={_}>• {_}</h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
