import { faCcAmex, faCcApplePay, faCcMastercard, faCcPaypal, faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faChevronLeft, faCircleInfo, faLock, faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import * as yup from "yup";
import { CartContext } from "../../context/Cart.context";
import Loading from "../../components/Loading/Loading";
import { createOrder } from "../../services/payment.services";
import { toast } from "react-toastify";
export default function Checkout() {
  const { cartInfo, isLoading, setCartInfo } = useContext(CartContext);
  const navigate = useNavigate();

  if (!cartInfo || !cartInfo.data || !cartInfo.data.products?.length) {
    navigate("/cart", { replace: true });
    return null;
  }

  const validationSchema = yup.object({
    paymentMethod: yup.string().required("Payment Method is required"),
    shippingAddress: yup.object({
      details: yup.string().required("Address is required"),
      phone: yup
        .string()
        .required("phone is required")
        .matches(/^(\+2)?01[0125][0-9]{8}$/, "Phone number is invalid"),
      city: yup.string().required("city is required"),
    }),
  });

  async function handelCreatingOrder(values) {
    try {
      const response = await createOrder({ cartId, shippingAddress: values.shippingAddress, paymentMethod: values.paymentMethod });
      console.log(response);
      if (response.success) {
        if (response.data.session) {
          toast.loading("you will be directed to stripe to complete payment proccess");

          setTimeout(() => {
            location.href = response.data.session.url;
          }, 3000);
        } else {
          toast.success("Your order has been created successfully");
          setCartInfo({
            numOfCartItems: 0,
            data: {
              products: [],
              totalCartPrice: 0,
            },
          });
          setTimeout(() => {
            navigate("/account/orders", { replace: true });
          }, 3000);
        }
      }
    } catch (error) {
      toast.error("Failed to create order. Please try again.");
    }
  }

  const formik = useFormik({
    initialValues: {
      paymentMethod: "Online",
      shippingAddress: {
        details: "",
        phone: "",
        city: "",
      },
    },
    validationSchema,
    onSubmit: handelCreatingOrder,
  });

  function handelPaymentChange(e) {
    formik.setFieldValue("paymentMethod", e.target.value);
  }
  if (isLoading) return <Loading />;
  const { cartId, numOfCartItems, data } = cartInfo;
  const { totalCartPrice, products } = data;

  return (
    <>
      <section>
        <div className="container mx-auto max-w-6xl p-7 py-6">
          <form onSubmit={formik.handleSubmit}>
            <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="payment-method lg:col-span-8">
                <div className="payment-options bg-white shadow-sm p-6 rounded-lg mb-6">
                  <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
                  <div>
                    <label
                      className={`${
                        formik.values.paymentMethod === "cod" && "bg-primary-50 border-primary-500"
                      }  flex items-center border gap-4 border-gray-200 hover:border-primary-500 transition-colors duration-300 p-4 rounded `}
                      htmlFor="cod"
                    >
                      <input
                        className="size-4"
                        type="radio"
                        name="payment-method"
                        value={`cod`}
                        id="cod"
                        onChange={(e) => handelPaymentChange(e)}
                        checked={formik.values.paymentMethod === "cod"}
                      />

                      <div className="w-full">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faMoneyBill1Wave} className="text-2xl text-primary-600" />
                            <div>
                              <h3 className="font-semibold">Cash On Delivery</h3>
                              <p className="text-gray-600 text-sm">Pay when your order arrives</p>
                            </div>
                          </div>
                          <span className="text-primary-600">No extra charges</span>
                        </div>

                        {formik.values.paymentMethod === "cod" && (
                          <div className="flex items-center border border-primary-600/50 gap-2 rounded-md p-2 text-primary-600 ml-10 mt-3 bg-primary-100">
                            <FontAwesomeIcon icon={faCircleInfo} />
                            <p className="text-sm">Please keep exact change ready for hassle-free delivery</p>
                          </div>
                        )}
                      </div>
                    </label>

                    <label
                      className={`${
                        formik.values.paymentMethod === "Online" && "bg-primary-50 border-primary-500"
                      } mt-3 flex items-center border gap-4 border-gray-200 hover:border-primary-500 transition-colors duration-300 p-4 rounded`}
                      htmlFor="online"
                    >
                      <input
                        className="size-4"
                        type="radio"
                        name="payment-method"
                        value="Online"
                        id="online"
                        onChange={(e) => handelPaymentChange(e)}
                        checked={formik.values.paymentMethod === "Online"}
                      />

                      <div className="w-full">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faCreditCard} className="text-2xl text-primary-600" />
                            <div>
                              <h3 className="font-semibold">Online Payment</h3>
                              <p className="text-gray-600 text-sm">Pay securely with card or digital wallet</p>
                            </div>
                          </div>
                          <span className="text-primary-600">Recommended</span>
                        </div>

                        {formik.values.paymentMethod === "Online" && (
                          <div className="flex items-center border border-blue-600/50 gap-2 rounded-md p-2 text-blue-600 ml-10 mt-3 bg-blue-50">
                            <FontAwesomeIcon icon={faCircleInfo} />
                            <p className="text-sm">You will be redirected to secure payment gateway to complete your transaction</p>
                          </div>
                        )}
                      </div>
                    </label>
                  </div>
                </div>

                <div className="shipping-address bg-white shadow-sm p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                  <div className="address">
                    <label className="text-sm" htmlFor="addressDetails">
                      Address Details
                    </label>
                    <textarea
                      className="form-control min-h-28 max-h-60"
                      id="addressDetails"
                      name="shippingAddress.details"
                      value={formik.values.shippingAddress.details}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Enter Your Full Address Details"
                    ></textarea>
                    {formik.errors.shippingAddress?.details && formik.touched.shippingAddress?.details && (
                      <p className="text-red-500 text-sm">*{formik.errors.shippingAddress?.details}</p>
                    )}
                  </div>

                  <div className="mt-3 flex gap-3 *:grow-1">
                    <div className="phone">
                      <label className="text-sm" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        className="form-control"
                        type="tel"
                        placeholder="01021160448"
                        id="phone"
                        name="shippingAddress.phone"
                        value={formik.values.shippingAddress.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.shippingAddress?.phone && formik.touched.shippingAddress?.phone && (
                        <p className="text-red-500 text-sm">*{formik.errors.shippingAddress?.phone}</p>
                      )}
                    </div>
                    <div className="city">
                      <label className="text-sm" htmlFor="city">
                        City *
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="example city"
                        id="city"
                        name="shippingAddress.city"
                        value={formik.values.shippingAddress.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.shippingAddress?.city && formik.touched.shippingAddress?.city && (
                        <p className="text-red-500 text-sm">*{formik.errors.shippingAddress?.city}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-summary bg-white shadow-sm rounded-lg p-6 lg:col-span-4">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="cart-items border-b max-h-48 overflow-auto border-gray-500/20 pb-3 space-y-3">
                  {products.map((product) => (
                    <Link to={`/product/${product.product.id}`} key={product._id} className="item flex gap-2 items-center text-sm">
                      <img className="size-12 object-cover rounded-lg" src={product.product.imageCover} alt="" />
                      <div>
                        <h3>{product.product.title}</h3>
                        <span className="text-xs text-gray-500">Qty: {product.count}</span>
                      </div>
                      <span className="ms-auto">{product.price} EGP</span>
                    </Link>
                  ))}
                </div>

                <ul className=" py-3 space-y-3 *:flex *:justify-between *:items-center">
                  <li>
                    <span>Subtotal</span>
                    <span>{totalCartPrice} EGP</span>
                  </li>

                  <li>
                    <span>Delivery</span>
                    <span>70 EGP</span>
                  </li>

                  <li>
                    <span>Tax</span>
                    <span>{Math.trunc(totalCartPrice * 0.14)} EGP</span>
                  </li>

                  <li className="font-semibold border-t border-gray-500/20 pt-3">
                    <span>Total</span>
                    <span>{Math.trunc(totalCartPrice + 70 + Math.trunc(totalCartPrice * 0.14))} EGP</span>
                  </li>
                </ul>

                <div className="btn-group py-2">
                  <button
                    type="submit"
                    className="btn bg-primary-600 text-white flex gap-2 items-center justify-center hover:bg-primary-700 w-full size-14 mb-3"
                  >
                    <span>Proceed to Payment</span>
                    <FontAwesomeIcon className="text-xl" icon={faArrowRight} />
                  </button>
                  <Link
                    to={"/cart"}
                    className="btn border border-gray-300 bg-white flex gap-2 items-center justify-center hover:bg-gray-200 w-full size-14 text-center"
                  >
                    <FontAwesomeIcon className="text-xl" icon={faChevronLeft} />
                    <span>Previous Step</span>
                  </Link>
                </div>

                <div>
                  <h3 className="text-xl font-semibold pb-2 pt-5">Secure Checkout</h3>
                  <div className="*:flex *:items-center *:justify-between *:gap-3">
                    <p className="text-gray-500">
                      <FontAwesomeIcon className="text-xl text-primary-600" icon={faLock} />
                      Your payment information is secure
                    </p>
                  </div>
                  <div className="flex items-center  mt-4 space-x-2">
                    <FontAwesomeIcon icon={faCcVisa} className="text-2xl text-blue-700" />
                    <FontAwesomeIcon icon={faCcMastercard} className="text-2xl text-red-500" />
                    <FontAwesomeIcon icon={faCcAmex} className="text-2xl text-blue-500" />
                    <FontAwesomeIcon icon={faCcPaypal} className="text-2xl text-blue-800" />
                    <FontAwesomeIcon icon={faCcApplePay} className="text-2xl text-blue-800" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
