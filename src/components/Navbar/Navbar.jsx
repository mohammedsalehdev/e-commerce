import { faAddressCard, faEnvelope, faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faBabyCarriage,
  faBars,
  faBolt,
  faEllipsis,
  faKitMedical,
  faPerson,
  faPersonDress,
  faPhone,
  faRightFromBracket,
  faShoppingCart,
  faSpinner,
  faUserPlus,
  faWifi,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/Auth.context";
import feshCartLogo from "../../assets/images/freshcart-logo.svg";
import { CartContext } from "../../context/Cart.context";
import { useOnlineStatus } from "../../hooks/useOnlineStatus";
const navLinks = [
  { to: "/WishList", label: "Wishlist", icon: faHeart, showWhen: "loggedIn" },
  { to: "/Cart", label: "Cart", icon: faShoppingCart },
  { to: "/Account", label: "Account", icon: faUser, showWhen: "loggedIn" },
  { to: "/Signup", label: "Signup", icon: faUserPlus, showWhen: "loggedOut" },
  { to: "/Login", label: "Login", icon: faAddressCard, showWhen: "loggedOut" },
];
const canvasLinks = [
  { to: "/WishList", label: "Wishlist", icon: faHeart, showWhen: "loggedIn" },
  { to: "/Cart", label: "Cart", icon: faShoppingCart },
  { to: "/Account", label: "Account", icon: faUser, showWhen: "loggedIn" },
];

const accountLinks = [
  { to: "/Signup", label: "Signup", icon: faUserPlus, showWhen: "loggedOut" },
  { to: "/Login", label: "Login", icon: faAddressCard, showWhen: "loggedOut" },
];

const navCategories = [
  { to: "/", label: "Home" },
  { to: "/Categories", label: "Categories" },
  { to: "/Deals", label: "Deals" },
  { to: "/Brands", label: "Brands" },
];

export default function Navbar() {
  const isOnline = useOnlineStatus();
  const { logOut, token } = useContext(AuthContext);
  const { cartInfo, isLoading } = useContext(CartContext);

  const [isMenue, setIsMenue] = useState(false);

  function toggleMenu() {
    setIsMenue(!isMenue);
  }

  return (
    <header>
      <div className="container mx-auto">
        <div className="py-2 border-b border-gray-200/40 text-sm text-gray-600">
          <div className="hidden lg:flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
            <ul className="flex flex-wrap gap-4 items-center">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+1 (800) 123-4567" className="hover:text-primary-600 transition">
                  +1 (800) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:support@freshcart.com" className="hover:text-primary-600 transition">
                  support@freshcart.com
                </a>
              </li>
              {isOnline && (
                <li className="text-primary-500 space-x-1">
                  <FontAwesomeIcon icon={faWifi} />
                  <span>Online</span>
                </li>
              )}
            </ul>

            <ul className="flex flex-wrap gap-4 items-center mt-2 sm:mt-0">
              <li>
                <a href="#" className="hover:text-primary-600 transition">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600 transition">
                  Contact
                </a>
              </li>
              <li>
                <select className="bg-transparent outline-none cursor-pointer hover:text-primary-600 transition">
                  <option value="EGP">EGP</option>
                  <option value="USD">USD</option>
                </select>
              </li>
              <li>
                <select className="bg-transparent outline-none cursor-pointer hover:text-primary-600 transition">
                  <option value="ar">العربية</option>
                  <option value="en">English</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <nav className="border-b border-gray-200 py-4 ">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-4 sm:gap-6">
          <h1 className="text-xl sm:text-2xl font-semibold whitespace-nowrap">
            <Link to={"/"} className="text-primary-600">
              Fresh<span className="text-gray-800">Cart</span>
            </Link>
          </h1>

          <search className="relative w-full sm:w-[300px] md:w-[400px] order-3 sm:order-none hidden lg:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              className="block w-full h-10 sm:h-12 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500"
              placeholder="Search For Products"
            />
          </search>

          <ul className="hidden lg:flex items-center gap-4 sm:gap-6 text-xs text-gray-700 w-full sm:w-auto relative">
            {navLinks
              .filter((link) => !link.showWhen || (token && link.showWhen === "loggedIn") || (!token && link.showWhen === "loggedOut"))
              .map((link) => (
                <li key={link.to} className="relative flex flex-col items-center hover:text-primary-600 transition">
                  <NavLink to={link.to} className={({ isActive }) => `${isActive ? "text-primary-600" : ""} flex flex-col items-center`}>
                    <FontAwesomeIcon icon={link.icon} className="text-base sm:text-lg mb-1" />
                    <span>{link.label}</span>

                    {link.label === "Cart" && (
                      <span className="absolute -top-3 -right-2 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {token ? isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : cartInfo?.numOfCartItems : 0}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}

            {token && (
              <li className="cursor-pointer flex flex-col items-center hover:text-primary-600 transition" onClick={logOut}>
                <FontAwesomeIcon icon={faRightFromBracket} className="text-base sm:text-lg mb-1" />
                <span>Logout</span>
              </li>
            )}
          </ul>
          <button className="lg:hidden btn bg-primary-600 text-white" onClick={toggleMenu}>
            {isMenue ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
          </button>
        </div>
      </nav>

      <nav className="bg-gray-100 py-3">
        <div className="container hidden lg:flex items-center gap-8 mx-auto">
          <div className="relative group">
            <button className="btn flex justify-between gap-2 items-center bg-primary-600 text-white hover:bg-primary-600/90">
              <FontAwesomeIcon icon={faBars} />
              <span>All Categories</span>
              <FontAwesomeIcon icon={faAngleDown} />
            </button>

            <menu className="hidden lg:block bg-white divide-y-2 z-20 divide-gray-200/30 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500 *:hover:bg-gray-100 shadow-lg *:py-3 *:px-3 rounded-lg absolute top-10 min-w-60">
              <li>
                <Link className="flex gap-2 items-center">
                  <FontAwesomeIcon className="text-primary-600 text-xl" fixedWidth icon={faPerson} />
                  <span>Men's Fashion</span>
                </Link>
              </li>
              <li>
                <Link className="flex gap-2 items-center">
                  <FontAwesomeIcon className="text-primary-600 text-xl" fixedWidth icon={faPersonDress} />
                  <span>women's Fashion</span>
                </Link>
              </li>
              <li>
                <Link className="flex gap-2 items-center">
                  <FontAwesomeIcon className="text-primary-600 text-xl" fixedWidth icon={faBabyCarriage} />
                  <span>Baby & Toys</span>
                </Link>
              </li>
              <li>
                <Link className="flex gap-2 items-center">
                  <FontAwesomeIcon className="text-primary-600 text-xl" fixedWidth icon={faKitMedical} />
                  <span>Beauty & Health</span>
                </Link>
              </li>
              <li>
                <Link className="flex gap-2 items-center">
                  <FontAwesomeIcon className="text-primary-600 text-xl" fixedWidth icon={faBolt} />
                  <span>Electronics</span>
                </Link>
              </li>
              <li>
                <Link className="flex gap-2 items-center">
                  <FontAwesomeIcon className="text-primary-600 text-xl" fixedWidth icon={faEllipsis} />
                  <span>View All Categories</span>
                </Link>
              </li>
            </menu>
          </div>
          {navCategories.map((link) => (
            <ul key={link.to} className="flex gap-5">
              <li>
                <NavLink to={link.to} className={({ isActive }) => (isActive ? "text-primary-600" : "")}>
                  {link.label}
                </NavLink>
              </li>
            </ul>
          ))}
        </div>
      </nav>

      {isMenue && (
        <>
          <div className="background cursor-pointer fixed inset-0 bg-black/50 z-30" onClick={toggleMenu}></div>
          <div
            className="offcanvas space-y-7 fixed z-40 bg-white top-0 bottom-0 p-5 w-96
                "
          >
            <div className="flex justify-between items-center mb-4">
              <img src={feshCartLogo} alt="Fresh Cart Logo" />
              <button className="btn rounded-full" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <search className="relative w-full mb-4">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="block w-full h-10 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500"
                placeholder="Search for products ..."
              />
            </search>
            <div>
              <h2 className="text-base font-bold text-gray-800 mb-2">Main Menu</h2>
              <ul className="flex flex-col gap-1 text-gray-700 relative">
                {canvasLinks
                  .filter((link) => !link.showWhen || (token && link.showWhen === "loggedIn") || (!token && link.showWhen === "loggedOut"))
                  .map((link) => (
                    <li key={link.to} className="relative flex items-center gap-2 transition px-2 py-2 rounded cursor-pointer">
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          `${
                            isActive ? "bg-primary-100 text-primary-600" : "hover:bg-gray-100"
                          } flex items-center gap-3 w-full px-2 py-2 rounded transition cursor-pointer`
                        }
                      >
                        <FontAwesomeIcon icon={link.icon} className="text-lg" />
                        <span>{link.label}</span>

                        {link.label === "Cart" && (
                          <span className="absolute top-1 left-6  bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {token ? isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : cartInfo?.numOfCartItems : 0}
                          </span>
                        )}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            </div>
            <hr className="my-2 border-gray-200" />
            <div>
              <h2 className="text-base font-bold text-gray-800 mb-2">Account</h2>
              <ul className="flex flex-col gap-1 text-gray-700">
                {accountLinks
                  .filter((link) => (token && link.showWhen === "loggedIn") || (!token && link.showWhen === "loggedOut"))
                  .map((link) => (
                    <li key={link.to} className="flex items-center gap-2 transition px-2 py-2 rounded cursor-pointer">
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          `${
                            isActive ? "bg-primary-100 text-primary-600" : "hover:bg-gray-100"
                          } flex items-center gap-3 w-full px-2 py-2 rounded transition cursor-pointer`
                        }
                      >
                        <FontAwesomeIcon icon={link.icon} className="text-lg" />
                        <span>{link.label}</span>
                      </NavLink>
                    </li>
                  ))}

                {token && (
                  <li
                    className="flex items-center gap-3 px-2 py-2 rounded transition cursor-pointer hover:bg-gray-100 bg-primary-100 text-primary-600"
                    onClick={logOut}
                  >
                    <FontAwesomeIcon className="ml-2 text-lg" icon={faRightFromBracket} />
                    <span>Logout</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
