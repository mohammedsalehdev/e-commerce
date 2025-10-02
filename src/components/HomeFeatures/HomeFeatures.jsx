import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faRotateLeft, faShieldHalved, faHeadphones } from "@fortawesome/free-solid-svg-icons";

export default function HomeFeatures() {
    return (
        <section>
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


                    <div className="flex items-center gap-4 border border-gray-100 shadow-sm rounded-xl p-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full text-xl">
                            <FontAwesomeIcon icon={faTruck} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-600">Free Delivery</h4>
                            <p className="text-sm text-gray-500">Orders $50 or more</p>
                        </div>
                    </div>


                    <div className="flex items-center gap-4 border border-gray-100 shadow-sm rounded-xl p-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full text-xl">
                            <FontAwesomeIcon icon={faRotateLeft} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-600">30 Days Return</h4>
                            <p className="text-sm text-gray-500">Satisfaction guaranteed</p>
                        </div>
                    </div>


                    <div className="flex items-center gap-4 border border-gray-100 shadow-sm rounded-xl p-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full text-xl">
                            <FontAwesomeIcon icon={faShieldHalved} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-600">Secure Payment</h4>
                            <p className="text-sm text-gray-500">100% protected checkout</p>
                        </div>
                    </div>


                    <div className="flex items-center gap-4 border border-gray-100 shadow-sm rounded-xl p-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full text-xl">
                            <FontAwesomeIcon icon={faHeadphones} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-600">24/7 Support</h4>
                            <p className="text-sm text-gray-500">Ready to help anytime</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
