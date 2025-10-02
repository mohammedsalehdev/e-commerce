import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faRedo,
  faEye,
  faTruck,
  faTimes,
  faCreditCard,
  faBoxOpen,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { getUserOrders } from "../../services/orders-services";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Auth.context";
import Loading from "../../components/Loading/Loading";

export default function Orders() {
  const { userInfo } = useContext(AuthContext);
  const [orders, setOrders] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchOrders() {
    try {
      setIsLoading(true);
      const response = await getUserOrders({ userId: userInfo.id });
      if (response.success) {
        setOrders(response.data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, [userInfo]);

  if (isLoading) {
    return <Loading />;
  }

  if (!orders) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">My Orders</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search orders..."
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
          />
        </div>
      </div>

      {orders.length === 0 && (
        <div className="bg-white border border-gray-200 rounded-xl p-10 text-center shadow-sm">
          <FontAwesomeIcon icon={faBoxOpen} className="text-gray-300 text-6xl mb-4" />
          <h2 className="text-lg font-semibold text-gray-800">No orders found</h2>
          <p className="text-gray-500 text-sm mt-1">You haven't placed any orders yet.</p>
          <button className="btn mt-4 bg-primary-600 text-white hover:bg-primary-700 px-6 py-2 rounded font-medium text-sm">
            Start Shopping
          </button>
        </div>
      )}

      {orders.length > 0 &&
        orders.map((order) => (
          <div key={order.id} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-gray-800 text-sm flex items-center gap-2">
                Order #{order.id}
                {order.isPaid ? (
                  <span className="flex items-center gap-1 ml-2 px-2 py-0.5 rounded-full bg-primary-100 text-primary-600 text-xs font-medium border border-primary-200">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 text-xs" />
                    Paid
                  </span>
                ) : (
                  <span className="flex items-center gap-1 ml-2 px-2 py-0.5 rounded-full bg-red-100 text-red-600 text-xs font-medium border border-red-200">
                    <FontAwesomeIcon icon={faTimesCircle} className="text-red-500 text-xs" />
                    Unpaid
                  </span>
                )}
              </h2>
              <div className="flex items-center gap-4 text-sm">
                <button className="flex items-center gap-1 text-primary-600 font-medium hover:underline">
                  <FontAwesomeIcon icon={faRedo} /> Reorder
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:underline">
                  <FontAwesomeIcon icon={faEye} /> View Details
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between gap-6">
              {order.cartItems.slice(0, 3).map((item) => (
                <div className="flex flex-col justify-start items-start pr-6 border-r border-gray-200 relative">
                  <div className="relative">
                    <img src={item.product.imageCover} alt="product" className="w-14 h-14 rounded-lg border border-gray-200" />
                    <span className="absolute -top-2 -right-2 bg-gray-100 border border-gray-200 text-gray-800 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-sm z-10">
                      {item.count}
                    </span>
                  </div>
                </div>
              ))}

              <div className="flex flex-1 items-center justify-between pr-6 border-r border-gray-200 text-sm">
                <div className="flex flex-col justify-center">
                  <p className="text-gray-500">Items</p>
                  <p className="font-semibold text-gray-800">{order.cartItems.length} items</p>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-gray-500">Total Amount</p>
                  <p className="font-semibold text-gray-800 text-base">{order.totalOrderPrice} EGP</p>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-gray-500">Delivered to</p>
                  <p className="font-semibold text-gray-800">
                    {order.shippingAddress.city}
                    <br />
                    <span className="text-xs text-primary-600 font-medium">on {new Date(order.createdAt).toDateString()}</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 justify-center min-w-[150px]">
                {order.isPaid ? (
                  <>
                    <button className="btn bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center gap-2 px-4 py-2 rounded text-sm font-semibold">
                      <FontAwesomeIcon icon={faTruck} /> Track Order
                    </button>
                    <button className="btn bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center justify-center gap-2 px-3 py-1.5 rounded text-xs font-semibold">
                      <FontAwesomeIcon icon={faTimes} /> Cancel Order
                    </button>
                  </>
                ) : (
                  <>
                    <button className="btn bg-yellow-500 text-white hover:bg-yellow-600 flex items-center justify-center gap-2 px-3 py-1.5 rounded text-xs font-semibold">
                      <FontAwesomeIcon icon={faCreditCard} /> Complete Payment
                    </button>
                    <button className="btn bg-primary-600 text-white hover:bg-primary-700 flex items-center justify-center gap-2 px-3 py-1.5 rounded text-xs font-semibold">
                      <FontAwesomeIcon icon={faRedo} /> Reorder Items
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}

      <div className="flex items-center justify-between mt-2 px-2">
        <span className="text-gray-500 text-sm">Showing 10 orders</span>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600 border border-gray-200 transition">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-primary-600 text-white font-bold border border-primary-600 transition">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600 border border-gray-200 transition">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
