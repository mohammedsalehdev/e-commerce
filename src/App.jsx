import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import WishList from "./pages/WishList/WishList";
import Favourites from "./pages/Favourites/Favourites";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/Orders/Orders";
import Signup from "./pages/Signup/Signup";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Checkout from "./pages/Checkout/Checkout";
import SearchProducs from "./pages/SearchProducs/SearchProducs";
import Brands from "./pages/Brands/Brands";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./context/Auth.context";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import CartProvider from "./context/Cart.context";
import AccountLayout from "./components/AccountLayout/AccountLayout";
import OfflineScreen from "./components/OfflineScreen/OfflineScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Deals from "./pages/Deals/Deals";
import CategoriesLayout from "./pages/CategoriesLayout/CategoriesLayout";
import CategoriesProducts from "./components/CategoriesProducts/CategoriesProducts";
import { WishlistProvider } from "./pages/WishList/WishList";
import { API_CONFIG } from "./config";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "Login",
            element: <Login />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
          {
            path: "forget-password",
            element: <ForgetPassword />,
          },
          {
            path: "verify-email",
            element: <VerifyEmail />,
          },
          {
            path: "product/:id",
            element: <ProductDetails />,
          },
          {
            path: "checkout",
            element: (
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            ),
          },
          {
            path: "search-producs",
            element: <SearchProducs />,
          },
          {
            path: "cart",
            element: (
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            ),
          },
          {
            path: "favourites",
            element: (
              <ProtectedRoute>
                <Favourites />
              </ProtectedRoute>
            ),
          },
          {
            path: "wishlist",
            element: <WishList />,
          },
          {
            path: "categories",
            element: <CategoriesLayout />,
            children: [{ path: "category/:id", element: <CategoriesProducts /> }],
          },
          {
            path: "brands",
            element: <Brands />,
          },
          {
            path: "account",
            element: (
              <ProtectedRoute>
                <AccountLayout />
              </ProtectedRoute>
            ),
            children: [
              {
                path: "orders",
                element: <Orders />,
              },
              {
                path: "wishlist",
                element: <WishList />,
              },
            ],
          },

          {
            path: "allorders",
            element: <Navigate to="/account/orders" />,
          },
          {
            path: "deals",
            element: <Deals />,
          },

          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
    ],
    { basename: API_CONFIG.baseName },
  );
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5000,
        gcTime: 10000,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <OfflineScreen>
          <AuthProvider>
            <WishlistProvider>
              <CartProvider>
                <RouterProvider router={router} />
                <ToastContainer autoClose={3000} closeButton={false} closeOnClick={true} />
              </CartProvider>
            </WishlistProvider>
          </AuthProvider>
        </OfflineScreen>
      </QueryClientProvider>
    </>
  );
}

export default App;
