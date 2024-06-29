import { useState } from "react";
import NavigationMenu from "./NavigationMenu";
function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  // className="fixed bg-white top-0 left-0 w-4/5 h-full z-10 shadow"
  // className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10" onClick={() => setShowMenu(!showMenu)}

  let menu;
  let menuMask;
  if (showMenu) {
    menu = (
      <NavigationMenu closeMenu={() => setShowMenu(!showMenu)}/>
    );
    menuMask = (
      <div
        className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
        onClick={() => setShowMenu(!showMenu)}
      ></div>
    );
  }
  return (
    <nav>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
          onClick={() => setShowMenu(!showMenu)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        {menuMask}
        {menu}
      </div>
    </nav>
  );
}

export default Nav;
