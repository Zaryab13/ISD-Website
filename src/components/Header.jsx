import { useState, useEffect, useRef, useMemo } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  // To track which navLink is Active
  const [activeLink, setActiveLink] = useState("");
  // isScrolled Styles applied when the user scrolls
  const navbarRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const changeIsScrolledBg = () => {
    if (window.scrollY >= 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeIsScrolledBg);
    return () => {
      window.removeEventListener("scroll", changeIsScrolledBg);
    };
  }, []);

  useEffect(() => {
    if (isScrolled) {
      navbarRef.current.classList.add("active");
      navbarRef.current.style.height = "70px";
    } else {
      navbarRef.current.classList.remove("active");
      navbarRef.current.style.height = "80px";
    }
  }, [isScrolled]);

  const memoizedNavLinks = useMemo(() => {
    return navLinks.map((link) => (
      <li
        key={link.name}
        className={`hover:text-primary relative text-[18-px] font-medium cursor-pointer py-2 px-1`}
      >
        <NavLink to={link.href} className={({ isActive }) => [
          isActive ? " text-primary active-navlink" : "text-slate-800"
        ]}>
          {link.name}
        </NavLink>
      </li>
    ));
  }, [navLinks]);

  const mobileNavigation = (
    <div className="sm:hidden flex flex-1 justify-end items-center filter invert">
      <img
        src={isMenuVisible ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px] object-contain cursor-pointer"
        onClick={() => setIsMenuVisible(!isMenuVisible)}
      />
      <div
        className={`${
          !isMenuVisible ? "hidden" : "flex"
        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-neutral-800 transition-all duration-300 ease-in-out`}
      >
        <ul className="list-none flex justify-end items-start flex-col gap-4 ">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                activeLink === link.title ? "text-white" : "text-secondary"
              } font-poppins font-medium cursor-pointer text-[16px]`}
            >
              <Link to={link.id}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const navbarClasses = `${styles.paddingX} navbar w-full fixed flex items-center z-20 bg-transparent animation-slideIn transition-all duration-300 ease-in-out
  transition-property: background-color, opacity;
`;

  return (
    <header className={navbarClasses} ref={navbarRef}>
      <nav className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center">
          <a href="home">
            <img src={logo} alt="logo" className="w-16 object-contain" />
          </a>
        </div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {memoizedNavLinks}
        </ul>

        {/* conditional render of mobile navigation */}
        {mobileNavigation}
      </nav>
    </header>
  );
};

export default Header;
