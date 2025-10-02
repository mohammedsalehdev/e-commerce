import { faClockFour, faShieldHalved, faTruck, faLock, faUsers, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import login from "../../assets/images/login.png";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { faEnvelope, faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { sendDataToLogin } from "../../services/auth-services";
import { AuthContext } from "../../context/Auth.context";

export default function Login() {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [inCorrectInfo, setInCorrectInfo] = useState(null);
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const validationSchema = yup.object({
    email: yup.string().required("email is required").email("Email is invalid"),
    password: yup
      .string()
      .required("password is required")
      .matches(
        passwordRegex,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character ",
      ),
  });
  const [isShowPassword, setIsShowPassword] = useState(false);

  function passwordVisiabilty(e) {
    e.preventDefault();
    setIsShowPassword(!isShowPassword);
  }

  async function handelLogin(values) {
    try {
      const response = await sendDataToLogin(values);
      if (response.success) {
        toast.success("Welcome Back");
        setToken(response.data.token);
        if (values.keepmesignin) {
          localStorage.setItem("token", response.data.token);
        } else {
          sessionStorage.setItem("token", response.data.token);
        }
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1500);
      }
    } catch (error) {
      setInCorrectInfo(error.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      keepmesignin: false,
    },
    validationSchema,
    onSubmit: handelLogin,
  });

  function handelChangeError(e) {
    setInCorrectInfo("");
    formik.handleChange(e);
  }

  return (
    <div className="container mx-auto py-11 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div>
          <div className="text-center space-y-6">
            <img className="w-full h-64 sm:h-80 lg:h-96 object-cover shadow-2xl rounded-2xl" src={login} alt="FreshCart Login" />
          </div>
          <div className="space-y-6 text-center py-7">
            <h2 className="font-bold text-black text-2xl sm:text-3xl">Fresh Groceries Delivered</h2>
            <p className="text-base sm:text-lg text-gray-600">
              Join thousands of happy customers who trust FreshCart for their <br className="hidden sm:block" /> daily grocery needs
            </p>
            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-center">
              <li>
                <FontAwesomeIcon className="text-primary-500 text-lg" icon={faTruck} /> Free Delivery
              </li>
              <li>
                <FontAwesomeIcon className="text-primary-500 text-lg" icon={faShieldHalved} /> Secure Payment
              </li>
              <li>
                <FontAwesomeIcon className="text-primary-500 text-lg" icon={faClockFour} /> 24/7 Support
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-primary-600">
                  Fresh<span className="text-gray-800">Cart</span>
                </span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
              <p className="text-gray-600">Sign in to continue your fresh shopping experience</p>
            </div>
            <div className="space-y-4">
              <button className="btn bg-white border border-gray-300 w-full flex items-center justify-center gap-2 py-2 h-12 rounded-lg hover:bg-gray-100 text-sm">
                <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
                Continue with Google
              </button>
              <button className="btn bg-white border border-gray-300 w-full flex items-center justify-center gap-2 py-2 h-12 rounded-lg hover:bg-gray-100 text-sm">
                <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
                Continue with Facebook
              </button>
            </div>
            <div className="relative my-6">
              <div className="border-t border-gray-200"></div>
              <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-4 text-sm text-gray-400">OR CONTINUE WITH EMAIL</span>
            </div>
            <form className="space-y-7" onSubmit={formik.handleSubmit}>
              <div className="email flex flex-col gap-1 relative">
                <label htmlFor="email">Email Address*</label>
                <div className="relative">
                  <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    className="form-control pl-10"
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formik.values.email}
                    onChange={handelChangeError}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.email && formik.errors.email && <p className="text-red-500">*{formik.errors.email}</p>}
              </div>
              <div className="password flex flex-col gap-2 relative">
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="text-gray-700 text-sm font-medium">
                    Password*
                  </label>
                  <Link
                    to="/ForgetPassword"
                    className="text-sm text-primary-600 hover:text-primary-700 hover:underline cursor-pointer font-medium transition"
                  >
                    Forget Password?
                  </Link>
                </div>
                <div className="relative">
                  <FontAwesomeIcon icon={faLock} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    className="form-control pl-10 pr-10"
                    type={isShowPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    name="password"
                    value={formik.values.password}
                    onChange={handelChangeError}
                    onBlur={formik.handleBlur}
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2" onClick={passwordVisiabilty} type="button">
                    {isShowPassword ? (
                      <FontAwesomeIcon icon={faEyeSlash} className="text-gray-400 cursor-pointer" />
                    ) : (
                      <FontAwesomeIcon icon={faEye} className="text-gray-400 cursor-pointer" />
                    )}
                  </button>
                </div>
                {formik.touched.password && formik.errors.password && <p className="text-red-500">*{formik.errors.password}</p>}
                {inCorrectInfo && <p className="text-red-500">*{inCorrectInfo}</p>}
              </div>
              <div className="flex gap-2 items-center">
                <input
                  className="accent-primary-600 w-4 h-4 rounded-full focus:ring-primary-300"
                  type="checkbox"
                  name="keepmesignin"
                  id="keepmesignin"
                  checked={formik.values.keepmesignin}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="keepmesignin">Keep me signed in</label>
              </div>
              <button
                className="btn bg-primary-600 text-white w-full h-14 flex gap-2 items-center justify-center hover:bg-primary-700"
                type="submit"
              >
                <FontAwesomeIcon icon={faLock} />
                <span>Sign In</span>
              </button>
            </form>
            <p className="text-sm text-center mt-6">
              New to FreshCart?{" "}
              <Link to="/Signup" className="text-primary-600 underline">
                Create an account
              </Link>
            </p>
            <div className="flex justify-between items-center text-xs text-gray-400 mt-6">
              <p>
                <FontAwesomeIcon icon={faLock} /> SSL Secured
              </p>
              <p>
                <FontAwesomeIcon icon={faUsers} /> 50K+ Users
              </p>
              <p>
                <FontAwesomeIcon icon={faStar} /> 4.9 Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
