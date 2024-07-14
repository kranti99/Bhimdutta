import Link from "next/link";
import { useState } from "react";
import headerData from "@/data/header.json";
export default function Menu() {
  const [showMenu, setShowmenu] = useState(false);
  const toggleMenu = () => {
    console.log("click");
    setShowmenu((prev) => !prev);
  };
  return (
    <div>
      <nav className="relative">
        <ul
          className={`flex items-center w-full flex-col sm:flex-row  gap-4 sm:gap-10 sm:h-fit sm:w-fit absolute sm:static ${
            showMenu ? "top-0" : "-top-[100vh]"
          } w-full transition-all duration-300 ease-in-out`}
        >
          {headerData.header.map((item, index) => (
            <li key={index}>
              <Link href={item.href} onClick={() => setShowmenu(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <button onClick={toggleMenu} className="sm:hidden z-20 relative">
          {showMenu ? "Close" : "Menu"}
        </button>
      </div>
    </div>
  );
}
