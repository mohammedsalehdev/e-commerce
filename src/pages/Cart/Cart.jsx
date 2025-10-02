import { faCheckCircle, faTruck, faLock, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItem from "../../components/CartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import { Link } from "react-router-dom";
import CartSkeleton from "../../components/skeleton/CartSkeleton";

export default function Cart() {
  const { cartInfo, isLoading } = useContext(CartContext);

  if (isLoading) {
    return <CartSkeleton />;
  }

  if (!cartInfo || !cartInfo.data) {
    return (
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-lg text-gray-700">
              Your cart is empty
              <FontAwesomeIcon icon={faShoppingCart} className="ms-2 text-primary-600" />
            </p>
            <p>
              You can continue shopping from
              <Link className="text-primary-600 ml-1" to={"/"}>
                here
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  const { numOfCartItems, data } = cartInfo;
  const { products, totalCartPrice } = data;

  const formatedPrice = (price) => new Intl.NumberFormat("en-US").format(Number(price));

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="border-b border-gray-200">
                <h1 className="text-2xl font-bold mb-1">Shopping Cart</h1>
                {products.length > 0 && <p className="text-gray-500 mb-6">{numOfCartItems} item in your cart</p>}
              </div>

              {products.length > 0 ? (
                products.map((productInfo) => <CartItem key={productInfo.product.id} productInfo={productInfo} />)
              ) : (
                <div className="text-center py-10 space-y-4">
                  <p>
                    Your cart is empty
                    <FontAwesomeIcon icon={faShoppingCart} className="ms-2 text-primary-600" />
                  </p>
                  <p>
                    You can continue shopping from
                    <Link className="text-primary-600 ml-1" to={"/"}>
                      here
                    </Link>
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-bold mb-4">Apply Coupon</h2>

              <div className="flex items-center justify-center mb-4 gap-x-2">
                <input type="text" placeholder="Enter coupon code" className="form-control shadow-sm" />
                <button className="btn text-white bg-primary-600  hover:bg-primary-700 transition-colors duration-200">Apply</button>
              </div>

              <div className="bg-primary-50 text-primary-700 p-3 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-600 mr-2" />
                  <span className="font-medium">FRESH20 Applied</span>
                </div>
                <span className="font-bold text-primary-800">-200 EGP</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>

              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal ({numOfCartItems} item)</span>
                <span className="font-medium">{formatedPrice(totalCartPrice)} EGP</span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium text-gray-600">{products.length > 0 ? 70 : 0}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">{formatedPrice(Math.trunc(totalCartPrice * 0.14))} EGP</span>
              </div>

              <div className="h-px my-4 bg-gray-200"></div>

              <div className="flex justify-between mb-6">
                <span className="font-semibold text-lg text-gray-800">Total</span>
                <span className="font-bold text-2xl text-primary-700">
                  {formatedPrice(Math.trunc(totalCartPrice + (products.length > 0 ? 70 : 0) + totalCartPrice * 0.14))} EGP
                </span>
              </div>

              <Link
                to={"/checkout"}
                className="btn w-full bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-center"
              >
                Proceed to Checkout
              </Link>
              <Link
                to={"/"}
                className="btn w-full bg-white text-gray-700 hover:bg-gray-100 mt-2 shadow-md border border-gray-200 text-center"
              >
                Continue Shopping
              </Link>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faTruck} className="text-primary-600 text-xl mr-2" />
                  <span className="font-semibold text-primary-800">Free Delivery</span>
                </div>
                <p className="text-sm text-gray-700">Your order qualifies for free delivery. Estimated delivery: 2-3 business days</p>
              </div>

              <div className="bg-primary-50 border border-primary-200 p-4 rounded-lg mt-4">
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faLock} className="text-primary-600 text-xl mr-2" />
                  <span className="font-semibold text-primary-800">Secure Checkout</span>
                </div>
                <p className="text-sm text-gray-700">Your payment information is protected with 256-bit SSL encryption</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
