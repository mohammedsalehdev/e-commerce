import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../Rating/Rating";
import { Link } from "react-router";
import { useContext, useState } from "react";
import { CartContext } from "../../context/Cart.context";

export default function CartItem({ productInfo }) {
  const { count, price, product } = productInfo;
  const { id, title, imageCover, category, ratingsAverage, quantity } = product;
  const { handeleRemoveFromCart, handelUpdateQunatity } = useContext(CartContext);
  const [isUpdating, setIsUpdating] = useState(false);
  const formatedPrice = new Intl.NumberFormat("en-US").format(Number(price));

  async function handelUpate({ id, count }) {
    setIsUpdating(true);
    await handelUpdateQunatity({ id, count });
    setIsUpdating(false);
  }
  return (
    <div className="divide-y divide-gray-200">
      <div className="py-6 flex items-center justify-between">
        <Link className="block" to={`/product/${id}`}>
          <div className="flex items-center">
            <div className={`flex-shrink-0 mr-4 ${isUpdating && "opacity-70"}`}>
              <img src={imageCover} alt="Organic Fresh Apples (1kg)" className="w-20 h-20 object-cover rounded-lg" />
            </div>

            <div className="flex-grow">
              <h3 className="font-semibold text-gray-900 max-w-sm">{title}</h3>
              <p className="text-sm text-gray-500 mb-1">{category?.name}</p>
              <div className="flex items-center">
                <div className="flex text-yellow-400 text-md mr-1">
                  <Rating rating={ratingsAverage} />
                </div>
                <span className="text-xs text-gray-500">
                  {ratingsAverage} ({quantity})
                </span>
              </div>
            </div>
          </div>
        </Link>

        <div className="flex-shrink-0 flex items-center gap-4">
          <div className="inline-flex items-center border border-gray-300 rounded-md">
            <button
              className="text-gray-500 hover:text-primary-600 p-2 transition-colors duration-200 border-r border-gray-300"
              onClick={() => {
                handelUpate({ id, count: count - 1 });
              }}
            >
              <FontAwesomeIcon icon={faMinus} className="text-xs"></FontAwesomeIcon>
            </button>
            <span className="mx-1 w-6 text-center text-gray-700">{count}</span>
            <button
              className="text-gray-500 hover:text-primary-600 p-2 transition-colors duration-200 border-l border-gray-300"
              onClick={() => {
                handelUpate({ id, count: count + 1 });
              }}
            >
              <FontAwesomeIcon icon={faPlus} className="text-xs"></FontAwesomeIcon>
            </button>
          </div>

          <div className="flex items-center justify-between min-w-[115px]">
            <div className="flex flex-col items-end">
              <div className="font-bold text-gray-900 text-lg">{formatedPrice} EGP</div>
            </div>

            <button
              className="text-red-500 hover:text-red-700 transition-colors duration-200"
              onClick={() => {
                {
                  handeleRemoveFromCart({ id });
                }
              }}
            >
              <FontAwesomeIcon icon={faTrash} className="text-base"></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
