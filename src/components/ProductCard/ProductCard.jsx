import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCodeCompare, faEye, faPlus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { calcDiscount } from "../../utils/discount-utlis";
import Rating from "../Rating/Rating";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import { WishlistContext } from "../../pages/WishList/WishList";

export default function ProductCard({ productInfo }) {
  const { imageCover, priceAfterDiscount, price, ratingsQuantity, ratingsAverage, title, category, id } = productInfo;

  const { handelAddingProductToCart, isLoading } = useContext(CartContext);
  const { handleAddToWishlist } = useContext(WishlistContext);

  const formatedPrice = (price) => new Intl.NumberFormat("en-US").format(Number(price));

  return (
    <div className="card rounded-xl shadow-lg overflow-hidden relative bg-white">
      <div>
        <Link className="block" to={`/product/${id}`}>
          <img className="h-60 mx-auto" src={imageCover} alt="product image" loading="lazy" />
        </Link>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <span className="text-sm text-gray-500">{category.name}</span>
          <h2 className="font-semibold">
            <Link className="line-clamp-2" to={`/product/${id}`}>
              {title}
            </Link>
          </h2>
        </div>

        <div className="ratings flex gap-2 items-center">
          <Rating rating={ratingsAverage} />
          <span>{ratingsAverage}</span>
          <span>({ratingsQuantity})</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="price space-x-2">
            <span className="text-lg text-primary-600 font-bold">
              {priceAfterDiscount ? formatedPrice(priceAfterDiscount) : formatedPrice(price)} EGP
            </span>

            {priceAfterDiscount && <del className="text-gray-500">{formatedPrice(price)} EGP</del>}
          </div>

          <button
            className="btn p-0 size-8 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition duration-200"
            onClick={() => {
              !isLoading && handelAddingProductToCart({ id });
            }}
          >
            <FontAwesomeIcon icon={isLoading ? faSpinner : faPlus} />
          </button>
        </div>
      </div>

      <div className="actions absolute top-4 right-4 flex flex-col gap-4">
        <button onClick={() => handleAddToWishlist({ id })}>
          <FontAwesomeIcon icon={faHeart} className="text-gray-500 hover:text-red-700 transition duration-200" />
        </button>
        <button>
          <FontAwesomeIcon icon={faCodeCompare} className="text-gray-500 hover:text-primary-600 transition duration-200" />
        </button>
        <button>
          <Link to={`/product/${id}`}>
            <FontAwesomeIcon icon={faEye} className="text-gray-500 hover:text-primary-600 transition duration-200" />
          </Link>
        </button>
      </div>
      {priceAfterDiscount && (
        <span className="badge absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-md">
          -{calcDiscount({ price, priceAfterDiscount })}%
        </span>
      )}
    </div>
  );
}
