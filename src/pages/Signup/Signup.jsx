import { faClockRotateLeft, faLeaf, faShieldHalved, faStar, faTag, faTruck, faTruckFast, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import reviewimg from "../../assets/images/Review.jpg"
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useState } from "react";
import { checkPasswordStrength } from "../../utils/password-utlis";
import { sendDataToSignUp } from "../../services/auth-services";

export default function Signup() {
    const navigate = useNavigate()
    const [accountError, setAccountError] = useState(null)



    const phoneRegex = /(\+2)?01[0125][0-9]{8}$/
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

    const validationSchema = yup.object({
        name: yup.string().required("Name is required"),
        email: yup.string().required("email is required").email("Email is invalid"),
        phone: yup.string().required("phone number is required").matches(phoneRegex, "We Accept Egyptain Phone Number Only"),
        password: yup.string().required("password is required").matches(passwordRegex, "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character "),
        rePassword: yup.string().required("confirm password is required").oneOf([yup.ref("password")], ('password should be the same')),
        terms: yup.boolean().oneOf([true], "You must agree our terms and conditions")
    });




    async function handelsignup(values) {
        try {
            const response = await sendDataToSignUp(values)
            if (response.success) {
                toast.success("Your Account has been Created")
                setTimeout(() => {
                    navigate("/login")
                }, 3000);
            }
        } catch (error) {
            setAccountError(error.message);


        }
    }

    const formik = useFormik({
        initialValues: {
            "name": "",
            "email": "",
            "password": "",
            "rePassword": "",
            "phone": "",
            "terms": false
        },
        validationSchema,
        onSubmit: handelsignup
    })



    const PasswordStrength = checkPasswordStrength(formik.values.password)

    return (
        <main className="py-12">
            <div className="container grid lg:grid-cols-2 lg:gap-12 mx-auto">
                {/* left side */}
                <div className="space-y-8 py-24">
                    <div className="left-side-header">
                        <h2 className="text-4xl font-bold">Welcome to <span className="text-primary-600">FreshCart</span></h2>
                        <p className="text-lg mt-2">Join thousands of happy customers who enjoy fresh groceries delivered right to their doorstep</p>
                    </div>


                    <ul className="*:flex *:items-center *:gap-3 space-y-4 ">
                        <li>
                            <div className="icon size-11 rounded-full bg-primary-100 text-xl flex justify-center items-center text-primary-600">
                                <FontAwesomeIcon icon={faLeaf} />
                            </div>
                            <div className="content">
                                <h3 className="font-semibold">Fresh & Organic</h3>
                                <p>Premium quality products sourced directly from farms</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon size-11 rounded-full bg-primary-100 text-xl flex justify-center items-center text-primary-600">
                                <FontAwesomeIcon icon={faTruck} />
                            </div>
                            <div className="content">
                                <h3 className="font-semibold">Fast Delivery</h3>
                                <p>Same-day delivery available in most areas</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon size-11 rounded-full bg-primary-100 text-xl flex justify-center items-center text-primary-600">
                                <FontAwesomeIcon icon={faShieldHalved} />
                            </div>
                            <div className="content">
                                <h3 className="font-semibold">Secure Shopping</h3>
                                <p>Your data and payments are completely secure</p>
                            </div>
                        </li>
                    </ul>



                    <div className="review p-6 rounded-xl mt-6 border-2 border-primary-100 bg-white shadow-lg">
                        <div className="flex items-center gap-3">
                            <img className="size-12 rounded-full" src={reviewimg} alt="Sarah Johnson Profile" />
                            <div>
                                <h3>Sarah Johnson</h3>
                                <div className="rating">
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                                </div>
                            </div>
                        </div>


                        <blockquote className="italic mt-4">
                            <p>"FreshCart has completely changed how I shop for groceries. the quality is amazing and delivery is always on time!"</p>
                        </blockquote>
                    </div>
                </div>



                {/* Right side */}
                <div className="bg-white shadow-xl rounded-xl px-6 py-12 space-y-8">
                    <div className="title text-center">
                        <h2 className="font-semibold text-3xl">Creat Your Account</h2>
                        <p className="mt-1">Start your fresh journey with us today</p>
                    </div>

                    <div className="flex *:justify-center *:w-full gap-2 *:flex *:gap-2 *:items-center *:hover:bg-gray-100">
                        <button className="btn bg-transparent border border-gray-400/30">
                            <FontAwesomeIcon icon={faGoogle} className="text-red-600" />
                            <span>Google</span>
                        </button>
                        <button className="btn bg-transparent border border-gray-400/30">
                            <FontAwesomeIcon icon={faFacebook} className="text-blue-700" />
                            <span>Facebook</span>
                        </button>
                    </div>

                    <div className="w-full bg-gray-300/40 h-0.5 relative">
                        <span className="absolute left-1/2 top-1/2 -translate-1/2 px-2 bg-white">Or</span>
                    </div>




                    <form className="space-y-7" onSubmit={formik.handleSubmit} >

                        <div className="name flex flex-col gap-1">
                            <label htmlFor="name">Your Full Name*</label>
                            <input className="form-control" type="text" id="name" placeholder="Write your full name" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.name && formik.errors.name && <p className="text-red-500">{formik.errors.name}</p>}
                        </div>

                        <div className="email flex flex-col gap-1">
                            <label htmlFor="email">Email Address*</label>
                            <input className="form-control" type="email" id="email" placeholder="@example.com" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.email && formik.errors.email && (<p className="text-red-500">{formik.errors.email}</p>)}
                            {accountError && <p className="text-red-500">{accountError}</p>}
                        </div>

                        <div className="phone flex flex-col gap-1">
                            <label htmlFor="phone">Phone Number*</label>
                            <input className="form-control" type="tel" id="phone" placeholder="+(20)01..." name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.phone && formik.errors.phone && <p className="text-red-500">{formik.errors.phone}</p>}
                        </div>

                        <div className="password flex flex-col gap-1">
                            <label htmlFor="password">Password*</label>
                            <input className="form-control" type="password" id="password" placeholder="Creat a strong password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {(formik.touched.password && formik.errors.password) ? <p className="text-red-500">{formik.errors.password}</p> : <p className="text-sm -mt-2">Must be at least 8 characters with numbers and symbols</p>}
                            <div className="password-strenght flex gap-2 items-center">
                                <div className="bar w-full h-1 bg-gray-200 overflow-hidden rounded-xl">
                                    <div className={`progressbar ${PasswordStrength.background} h-full ${PasswordStrength.width} `}></div>
                                </div>
                                <span className="text-nowrap w-28 text-center">{PasswordStrength.text}</span>
                            </div>
                        </div>

                        <div className="repassword flex flex-col gap-1">
                            <label htmlFor="repassword">Confirm Password*</label>
                            <input className="form-control" type="password" id="repassword" placeholder="Confirm Your Password" name="rePassword" value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.rePassword && formik.errors.rePassword && <p className="text-red-500">{formik.errors.rePassword}</p>}
                        </div>
                        <div className="news flex gap-2 items-center">
                            <input className="accent-green-600 w-4 h-4 rounded-full focus:ring-green-300" type="checkbox" name="news" id="news" />
                            <label className="mt-7" htmlFor="news">i'd like to receive promotional emails about new products, discounts, and exclusive offers.</label>
                        </div>
                        <div className="terms">
                            <div className="flex gap-2 items-center">
                                <input className="accent-green-600 w-4 h-4 rounded-full focus:ring-green-300" type="checkbox" name="terms" id="terms" value={formik.values.terms} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                <label className="-mt-0.5" htmlFor="terms">i agree to the <Link className="text-primary-600 underline" to={`/terms`}>Terms of Service</Link> and <Link className="text-primary-600 underline" to={`/privacy-policy`}>Privacy Policy*</Link></label>
                            </div>
                            {formik.touched.terms && formik.errors.terms && <p className="text-red-500 mt-2">*{formik.errors.terms}</p>}
                        </div>
                        <button className="btn bg-green-600 text-white w-full h-14 flex gap-2 items-center justify-center hover:bg-green-700" type="submit">
                            <FontAwesomeIcon icon={faUserPlus} />
                            <span>Creat My Account</span>
                        </button>
                    </form>
                    <p className="text-center border-t border-gray-300/50 pt-8">Already have an account? <Link className="text-primary-600 underline" to={`/login`}>sign in</Link> </p>
                </div>
            </div>



            <div className="bg-white text-center border-t border-gray-200/40">
                <h2 className="text-2xl font-bold mb-8 mt-8">Why Create an Account with <span className="text-green-600">FreshCart</span>?</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">


                    <div className="flex flex-col items-center text-center">
                        <div className="bg-green-100 p-4 rounded-full mb-4">
                            <FontAwesomeIcon icon={faTruckFast} className="text-green-600 text-xl" />
                        </div>
                        <h3 className="text-sm font-semibold mb-1">Faster Checkout</h3>
                        <p className="text-gray-500 text-sm">Save your delivery information for a quicker shopping experience.</p>
                    </div>


                    <div className="flex flex-col items-center text-center">
                        <div className="bg-green-100 p-4 rounded-full mb-4">
                            <FontAwesomeIcon icon={faTag} className="text-green-600 text-xl" />
                        </div>
                        <h3 className="text-sm font-semibold mb-1">Exclusive Deals</h3>
                        <p className="text-gray-500 text-sm">Get access to member-only discounts and early sale notifications.</p>
                    </div>


                    <div className="flex flex-col items-center text-center">
                        <div className="bg-green-100 p-4 rounded-full mb-4">
                            <FontAwesomeIcon icon={faClockRotateLeft} className="text-green-600 text-xl" />
                        </div>
                        <h3 className="text-sm font-semibold mb-1">Order History</h3>
                        <p className="text-gray-500 text-sm">Easily track and reorder your favorite products from past purchases.</p>
                    </div>

                </div>
            </div>





        </main>
    )
}
