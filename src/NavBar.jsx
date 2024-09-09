import logo from "./images/logo.svg";
import iconHamburger from "./images/icon-hamburger.svg";
import iconClose from "./images/icon-close.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
function NavBar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      {/* overlay */}
      {isOpenMenu && (
        <div
          className="absolute left-0 top-0 z-10 min-h-dvh w-full bg-transparent xl:hidden"
          onClick={() => setIsOpenMenu(false)}
        ></div>
      )}
      {/* overlay */}
      <nav className="relative mx-auto flex max-w-[1110px] items-center justify-between px-8 xl:px-0">
        <div className="w-6 lg:w-8">
          <img src={logo} alt="logo" className="w-full" />
        </div>

        <div>
          {/* mobile */}
          <div className="xl:hidden">
            <div
              className="w-6 cursor-pointer"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              <img
                src={isOpenMenu ? iconClose : iconHamburger}
                alt="icon menu"
                className="w-full cursor-pointer"
              />
            </div>

            <AnimatePresence>
              {isOpenMenu && (
                <motion.ul
                  className={
                    "absolute right-8 top-[62px] z-20 flex w-[311px] flex-col items-center gap-6 bg-white p-6 text-lg font-bold leading-none tracking-[1.2px] shadow-modal"
                  }
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                >
                  <li>
                    <a href="#" className="transition-all hover:underline">
                      PRODUCT
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-all hover:underline">
                      FEATURES
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-all hover:underline">
                      PRICING
                    </a>
                  </li>
                  <li className="h-[1px] w-full bg-very-dark-blue opacity-15"></li>
                  <li className="opacity-50">
                    <a href="#" className="transition-all hover:underline">
                      LOGIN
                    </a>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          {/* mobile */}

          {/* desktop */}
          <ul className="hidden min-w-[379px] items-center justify-between text-[15px] font-bold leading-none tracking-[1px] text-very-dark-blue xl:flex">
            <li>
              <a href="#" className="transition-all hover:underline">
                PRODUCT
              </a>
            </li>
            <li>
              <a href="#" className="transition-all hover:underline">
                FEATURES
              </a>
            </li>
            <li>
              <a href="#" className="transition-all hover:underline">
                PRICING
              </a>
            </li>
            <li className="size-[6px] rounded-full bg-very-dark-blue opacity-15"></li>
            <li className="opacity-50">
              <a href="#" className="transition-all hover:underline">
                LOGIN
              </a>
            </li>
          </ul>
          {/* desktop */}
        </div>
      </nav>
    </>
  );
}
export default NavBar;
