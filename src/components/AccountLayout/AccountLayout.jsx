import { Outlet, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faBagShopping,
  faHeart,
  faStar,
  faMapMarkerAlt,
  faCreditCard,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth.context";

export default function AccountLayout() {
  const { userInfo, logOut } = useContext(AuthContext);

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto flex">
        <aside className="w-64 bg-white rounded-xl p-6 flex flex-col gap-6 shadow border border-gray-100 h-fit">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} className="text-primary-600 text-xl" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 text-sm">{userInfo?.name || "Account"}</h2>
              <p className="text-xs text-gray-500">{userInfo?.email || "user@example.com"}</p>
            </div>
          </div>
          <nav className="flex flex-col gap-1">
            <NavLink
              to="/account/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
                  isActive ? "bg-primary-100 text-primary-600" : "hover:bg-gray-100 text-gray-700"
                }`
              }
            >
              <FontAwesomeIcon icon={faGauge} className="text-lg" />
              <span>Dashboard</span>
            </NavLink>
            <NavLink
              to="/account/orders"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
                  isActive ? "bg-primary-100 text-primary-600" : "hover:bg-gray-100 text-gray-700"
                }`
              }
            >
              <FontAwesomeIcon icon={faBagShopping} className="text-lg" />
              <span>Orders</span>
            </NavLink>
            <NavLink
              to="/account/wishlist"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
                  isActive ? "bg-primary-100 text-primary-600" : "hover:bg-gray-100 text-gray-700"
                }`
              }
            >
              <FontAwesomeIcon icon={faHeart} className="text-lg" />
              <span>Wishlist</span>
            </NavLink>
            <NavLink
              to="/account/favourites"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
                  isActive ? "bg-primary-100 text-primary-600" : "hover:bg-gray-100 text-gray-700"
                }`
              }
            >
              <FontAwesomeIcon icon={faStar} className="text-lg" />
              <span>Favorites</span>
            </NavLink>
            <NavLink
              to="/account/addresses"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
                  isActive ? "bg-primary-100 text-primary-600" : "hover:bg-gray-100 text-gray-700"
                }`
              }
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-lg" />
              <span>Addresses</span>
            </NavLink>
            <NavLink
              to="/account/payment-methods"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
                  isActive ? "bg-primary-100 text-primary-600" : "hover:bg-gray-100 text-gray-700"
                }`
              }
            >
              <FontAwesomeIcon icon={faCreditCard} className="text-lg" />
              <span>Payment Methods</span>
            </NavLink>
            <NavLink
              to="/account/account-details"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
                  isActive ? "bg-primary-100 text-primary-600" : "hover:bg-gray-100 text-gray-700"
                }`
              }
            >
              <FontAwesomeIcon icon={faUser} className="text-lg" />
              <span>Account Details</span>
            </NavLink>
            <button
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition hover:bg-gray-100 text-red-600 mt-2"
              onClick={logOut}
            >
              <FontAwesomeIcon icon={faRightFromBracket} className="text-lg" />
              <span>Logout</span>
            </button>
          </nav>
        </aside>
        {/* Main Content */}
        <div className="flex-1 mx-5 border border-gray-100 rounded-2xl px-6 py-4 shadow-2xl">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
