import { useState } from "react";
import Link from "./Link"; // Ensure this is correctly imported and with proper casing

import { IoMdMenu } from "react-icons/io";
import { FaRegWindowClose } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const routes = [
    { path: "/home", id: 1, name: "Home" },
    { path: "/blog", id: 2, name: "Blog" },
    { path: "/about", id: 3, name: "About" },
    { path: "/contact", id: 4, name: "Contact" },
    { path: "/services", id: 5, name: "Services" }
  ];

  return (
    <div>
      <div className="md:hidden ml-10" onClick={() => setMenu(!menu)}>
        {menu ? (
          <FaRegWindowClose className="text-2xl" />
        ) : (
          <IoMdMenu className="text-2xl" />
        )}
      </div>
      <ul
        className={`md:flex absolute md:static duration-1000 ${
          menu ? "top-8" : "-top-40"
        } bg-red-500 px-6 shadow-md`}
      >
        {routes.map((info) => (
          <Link key={info.id} value={info} />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
