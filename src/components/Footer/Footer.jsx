import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faPinterest,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className=" bg-white border-t border-gray-200/40">
            <div className="bg-green-50 py-10 px-6 text-center">
                <h2 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h2>
                <p className="text-gray-600 mb-4">
                    Stay updated with our latest offers, recipes, and health tips.
                </p>
                <form className="max-w-md mx-auto flex flex-col sm:flex-row items-center">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full sm:w-auto flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                    <button
                        type="submit"
                        className="mt-2 sm:mt-0 sm:ml-2 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-700">
                <div>
                    <h2 className="text-2xl font-bold mb-2">
                        <span className="text-green-600">Fresh</span>Cart
                    </h2>
                    <p className="mb-4">
                        FreshCart is your one-stop destination for fresh groceries,
                        organic produce, and household essentials delivered right to your doorstep.
                    </p>
                    <div className="flex space-x-4 text-lg text-gray-500">
                        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Categories</h3>
                    <ul className="space-y-1">
                        <li>Fruits & Vegetables</li>
                        <li>Dairy & Eggs</li>
                        <li>Bakery & Snacks</li>
                        <li>Meat & Seafood</li>
                        <li>Beverages</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1">
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Shipping Policy</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Customer Service</h3>
                    <ul className="space-y-1">
                        <li>My Account</li>
                        <li>Order History</li>
                        <li>Wishlist</li>
                        <li>Returns & Refunds</li>
                        <li>Help Center</li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-xs font-bold text-gray-500 pb-4">
                © {new Date().getFullYear()} <span className='text-green-600'>FreshCart.</span> All rights reserved.
            </div>
        </footer>
    );
}