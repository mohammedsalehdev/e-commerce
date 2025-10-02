import { useState } from 'react'
import ProductInfoTab from './ProductInfoTab';
import ReviewsTab from './ReviewsTab';
import ShippingTab from './ShippingTab';

export default function ProtuctDetailsTabs({ productDetails }) {
    const [activeTab, setActiveTab] = useState('details');



    function getActiveTab() {
        switch (activeTab) {
            case "details":
                return <ProductInfoTab productDetails={productDetails} />;
            case "reviews":
                return <ReviewsTab />;
            case "shipping":
                return <ShippingTab />
            default:
                return <ProductInfoTab />
        }





    }
    return (
        <div className="container mx-auto bg-white p-6 rounded">
            <div className="flex gap-8 border-b border-gray-200 mb-8">
                <button
                    className={`relative pb-3 font-semibold focus:outline-none ${activeTab === "details"
                        ? "text-primary-600 border-primary-500 border-b-2"
                        : "text-gray-500 hover:text-primary-600"
                        }`}
                    onClick={() => setActiveTab("details")}
                >
                    Product Details
                </button>
                <button
                    className={`relative pb-3 font-medium focus:outline-none ${activeTab === "reviews"
                        ? "text-primary-600 border-primary-500 border-b-2"
                        : "text-gray-500 hover:text-primary-600"
                        }`}
                    onClick={() => setActiveTab("reviews")}
                >
                    Reviews <span className="ml-1">(149)</span>
                </button>
                <button
                    className={`relative pb-3 font-medium focus:outline-none ${activeTab === "shipping"
                        ? "text-primary-600 border-primary-500 border-b-2"
                        : "text-gray-500 hover:text-primary-600"
                        }`}
                    onClick={() => setActiveTab("shipping")}
                >
                    Shipping & Returns
                </button>
            </div>

            <div className='p-6'>{getActiveTab()}</div>

        </div>
    )
}
