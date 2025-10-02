import { createContext, useEffect, useState } from "react";
import { addToWishlist, deleteItemsFromWishlist, getItemsFromWishlist } from "../../services/wishlist-services";
import { toast } from "react-toastify";

export const WishlistContext = createContext(null);
export function WishlistProvider({ children }) {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function handleAddToWishlist({ id }) {
    try {
      const response = await addToWishlist({ id });
      if (response.success) {
        setProduct(response?.data.data);
        toast.success(response.data.message);
        handleGetitemsFromWishlist();
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function handleGetitemsFromWishlist() {
    try {
      setIsLoading(true);
      const response = await getItemsFromWishlist();
      if (response.success) {
        setIsLoading(false);
        setProduct(response?.data.data);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  async function handleDeleteItemsFromWishlist({ id }) {
    try {
      const response = await deleteItemsFromWishlist({ id });
      if (response.success) {
        setProduct(response?.data.data);
        console.log(response.data.data);
        toast.error(response.data.message);
        handleGetitemsFromWishlist();
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    handleGetitemsFromWishlist();
  }, []);

  return (
    <WishlistContext.Provider value={{ handleAddToWishlist, isLoading, product, handleDeleteItemsFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

import { useContext } from "react";
import Loading from "../../components/Loading/Loading";
import { CartContext } from "../../context/Cart.context";
export default function WishList() {
  const { isLoading, product, handleDeleteItemsFromWishlist } = useContext(WishlistContext);
  const { handelAddingProductToCart } = useContext(CartContext);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <section className="py-8">
        <div className="container mx-auto">
          {product?.length === 0 ? (
            <p className="text-gray-600 text-xl bg-gray-200 py-4 px-2 text-center ">No items in your wishlist</p>
          ) : (
            <>
              {product?.map((item) => {
                return (
                  <div className="item flex justify-between items-center" key={item.id}>
                    <div className="flex gap-5 items-center">
                      <img src={item.imageCover} alt={item.title} className="size-24" />
                      <div className="data space-y-3">
                        <h2 className="font-semibold text-gray-400">{item.title}</h2>
                        <p className="text-green-400">{item.price} Egp</p>
                        <button
                          onClick={() => {
                            handleDeleteItemsFromWishlist({ id: item.id });
                          }}
                          className="text-red-600"
                        >
                          Remove From wishlist
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        handelAddingProductToCart({ id: item.id });
                      }}
                      className="bg-primary-600 text-white btn"
                    >
                      Add To Cart
                    </button>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </section>
    </>
  );
}
