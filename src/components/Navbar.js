import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

// icons
import { MailIcon, MenuIcon, PhoneIcon } from "@heroicons/react/outline";

// image
import { logo } from "../image";
import { Link } from "react-router-dom";
import Menu from "./Menu";

function Navbar() {
  const [open, setOpen] = useState(true);

  return (
    <div className="space-y-8">
      {/* section 1 */}
      <div className="bg-transparent text-white flex items-center pt-4">
        <div className="flex md:space-x-6 space-x-3">
          <a href="mailto:gmail@dedeheri.com" className="flex space-x-2">
            <MailIcon className="w-4 md:w-5" />
            <h1 className="font-medium  text-sm md:text-md hover:text-white text-gray-300 duration-200">
              gmail@dedeheri.com
            </h1>
          </a>
          <a href="tel:+628221669226" className="flex space-x-2">
            <PhoneIcon className="w-4 md:w-5" />
            <h1 className="font-medium text-sm md:text-md hover:text-white text-gray-300 duration-200">
              (+62) 822-166-9226
            </h1>
          </a>
        </div>
      </div>
      {/* section 2 */}
      <div className="bg-transparent text-white flex items-center justify-between">
        <Link to="/">
          <img src={logo} className="md:w-20 w-14" />
        </Link>

        {/* dekstop */}
        <div className="space-x-6 md:flex hidden">
          <Link to="portfolio">
            <h1 className="font-medium text-lg hover:text-white text-gray-300 duration-200">
              Portfolio
            </h1>
          </Link>
          <Link to="portfolio">
            <h1 className="font-medium text-lg hover:text-white text-gray-300 duration-200">
              Tentang
            </h1>
          </Link>
        </div>
        {/* mobile */}
        <button className="hover:bg-[#2F2F2F] p-1 rounded-md block md:hidden duration-200">
          <MenuIcon className="w-6" />
        </button>

        {/* sidebar */}
        {/* <Menu open={open} setOpen={setOpen} /> */}
      </div>
    </div>
  );
}

export default Navbar;
