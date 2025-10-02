import { createContext, useEffect, useState, useContext } from "react";
import { addProductToCart, getCartItems, removeItemFromCart, updateProductQuantity } from "../services/cart-services";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AuthContext } from "./Auth.context";

const MySwal = withReactContent(Swal);

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const { token } = useContext(AuthContext);
  const [cartInfo, setCartInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  async function handelFetchCartItems() {
    try {
      setIsLoading(true);
      const response = await getCartItems(token);
      if (response.success) {
        setCartInfo(response.data);
        setIsLoading(false);
        setIsError(false);
        setError(null);
      } else {
        setCartInfo(null);
        setIsLoading(false);
        setIsError(true);
        setError(response.message || "Error fetching cart");
      }
    } catch (error) {
      setCartInfo(null);
      setIsLoading(false);
      setIsError(true);
      setError(error);
    }
  }

  async function handelAddingProductToCart({ id }) {
    try {
      setIsLoading(true);
      const response = await addProductToCart({ id, token });
      if (response.success) {
        toast.success(response.data.message);
        handelFetchCartItems();
      } else {
        toast.error(response.message || "Error adding product");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setError(error);
    }
  }

  async function handeleRemoveFromCart({ id }) {
    try {
      const result = await MySwal.fire({
        title: "Are you sure?",
        text: "You won't be able to remove item!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#7D8D86",
        confirmButtonText: "Yes, delete it!",
        iconColor: "#d33",
      });

      if (result.isConfirmed) {
        const toastId = toast.loading("we are deleting cart item");
        const response = await removeItemFromCart({ id, token });

        if (response.success) {
          toast.dismiss(toastId);
          setCartInfo(response.data);
        } else {
          toast.error(response.message || "Error removing item");
        }
      }
    } catch (error) {
      setIsError(true);
      setError(error);
    }
  }

  async function handelUpdateQunatity({ id, count }) {
    try {
      const toastID = toast.loading("Updating Product Quantity");
      const response = await updateProductQuantity({ id, count, token });
      if (response.success) {
        toast.dismiss(toastID);
        setCartInfo(response.data);
      } else {
        toast.error(response.message || "Error updating quantity");
      }
    } catch (error) {
      setIsError(true);
      setError(error);
    }
  }

  useEffect(() => {
    handelFetchCartItems();
  }, [token]);

  return (
    <CartContext.Provider
      value={{
        cartInfo,
        isLoading,
        isError,
        error,
        setCartInfo,
        handelAddingProductToCart,
        handeleRemoveFromCart,
        handelUpdateQunatity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
