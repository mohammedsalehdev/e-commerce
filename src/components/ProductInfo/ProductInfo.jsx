import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMinus, faPlus, faTruck, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Rating from "../Rating/Rating";
import { calcDiscount } from "../../utils/discount-utlis";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { CartContext } from "../../context/Cart.context";
import { WishlistContext } from "../../pages/WishList/WishList";

export default function ProductInfo({ productDetails }) {
  const { id, title, description, category, images, price, priceAfterDiscount, ratingsAverage, quantity, ratingsQuantity } = productDetails;
  const { handelAddingProductToCart } = useContext(CartContext);
  const { handleAddToWishlist } = useContext(WishlistContext);

  const formatedPrice = (price) => (price ? new Intl.NumberFormat("en-US").format(Number(price)) : 0);

  return (
    <div className="container mx-auto py-8 px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div className="mx-auto lg:w-96">
          <ReactImageGallery
            showNav={false}
            showPlayButton={false}
            showFullscreenButton={false}
            items={images.map((image) => ({
              original: image,
              thumbnail: image,
            }))}
          />
        </div>

        <div className="flex flex-col gap-4 md:gap-6 shadow-lg p-4 md:p-6 rounded-xl bg-white">
          <div className="flex items-center justify-between">
            <span
              className={`${
                quantity > 0 ? "text-xs font-semibold text-primary-600 bg-primary-100" : "text-xs font-semibold text-red-600 bg-red-100"
              } px-2 py-1 rounded w-fit`}
            >
              {quantity > 0 ? "In Stock" : "Out of Stock"}
            </span>
            <button onClick={() => handleAddToWishlist({ id })}>
              <FontAwesomeIcon className="hover:text-red-700" icon={faHeart} />
            </button>
          </div>

          <h1 className="text-2xl font-bold break-words">{title}</h1>

          <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 pb-4">
            <div className="flex text-yellow-400 text-lg">
              <Rating rating={ratingsAverage} />
            </div>
            <span className="text-gray-600 text-sm font-medium ml-2">{ratingsAverage}</span>
            <span className="text-gray-400 text-sm">({ratingsQuantity} reviews)</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-3xl font-bold text-gray-800">{formatedPrice(priceAfterDiscount) || formatedPrice(price)} EGP</span>

            {priceAfterDiscount && priceAfterDiscount !== price ? (
              <>
                <span className="text-lg text-gray-500 line-through">{formatedPrice(price)} EGP</span>
                <span className="ml-3 bg-red-100 text-red-700 text-sm px-2 py-1 rounded">
                  saved {calcDiscount({ price, priceAfterDiscount })}%
                </span>
              </>
            ) : (
              ""
            )}
          </div>

          <div className="text-gray-600 text-sm border-t border-gray-200 pt-4">
            <p>{description}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 border-b border-gray-200 pb-4">
            <span className="font-medium">Quantity:</span>
            <div className="flex items-center gap-2 border border-gray-300 rounded px-2 bg-white">
              <button className="w-8 h-8 flex items-center justify-center bg-white text-gray-700">
                <FontAwesomeIcon className="hover:text-primary-500" icon={faMinus} />
              </button>
              <span className="font-semibold text-lg px-2 select-none">1</span>
              <button className="w-8 h-8 flex items-center justify-center bg-white text-gray-700">
                <FontAwesomeIcon className="hover:text-primary-500" icon={faPlus} />
              </button>
            </div>
            <span className="text-xs text-gray-400 ml-2">Only {quantity} items left in stock</span>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch gap-3 border-b border-gray-200 pb-4">
            <button
              className="btn flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-0 py-3 rounded transition flex items-center justify-center gap-2"
              onClick={() => {
                handelAddingProductToCart({ id });
              }}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              Add to Cart
            </button>
            <button className="btn flex-1 border border-gray-300 text-gray-800 font-semibold px-0 py-3 rounded transition hover:bg-gray-100 flex items-center justify-center">
              Buy Now
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 pt-2">
            <div className="flex flex-col items-center flex-1 w-full">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary-100">
                  <FontAwesomeIcon icon={faTruck} className="text-primary-600 text-xl" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">Free Delivery</span>
                  <span className="text-xs text-gray-400">Free shipping on orders over $50</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center flex-1 w-full">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary-100">
                  <FontAwesomeIcon icon={faRotateLeft} className="text-primary-600 text-xl" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">30 Days Return</span>
                  *** End Patch
                  <span className="text-xs text-gray-400">Satisfaction guaranteed or money back</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
