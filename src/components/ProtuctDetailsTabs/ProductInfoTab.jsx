import { faLeaf, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductInfoTab({ productDetails }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h2 className="text-lg font-semibold mb-2">Product Description</h2>
                <p className="text-gray-700 mb-4">
                    {productDetails.description}
                </p>
                <div className="mb-4">
                    <span className="font-semibold">Benefits</span>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        <li>Rich in vitamins C and K</li>
                        <li>Good source of fiber and antioxidants</li>
                        <li>Supports heart health</li>
                        <li>Helps regulate blood sugar</li>
                        <li>Promotes healthy skin</li>
                    </ul>
                </div>
                <div className="mb-4">
                    <span className="font-semibold">How to Store</span>
                    <p className="text-gray-700 mt-2">
                        For optimal freshness, refrigerate strawberries unwashed in their original container or in a paper towel-lined container. Wash just before eating. To extend shelf life, remove any damaged berries as soon as possible.
                    </p>
                </div>
                <div>
                    <span className="font-semibold">Certifications</span>
                    <div className="flex gap-3 mt-2">
                        <span className="inline-flex items-center gap-2 border border-primary-200 bg-primary-50 text-primary-700 px-3 py-1 rounded text-xs font-medium">
                            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary-100">
                                <FontAwesomeIcon icon={faLeaf} className="text-primary-600 text-sm" />
                            </span>
                            USDA Organic
                        </span>
                        <span className="inline-flex items-center gap-2 border border-primary-200 bg-primary-50 text-primary-700 px-3 py-1 rounded text-xs font-medium">
                            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary-100">
                                <FontAwesomeIcon icon={faSeedling} className="text-primary-600 text-sm" />
                            </span>
                            Non-GMO
                        </span>
                    </div>
                </div>
            </div>

            <div className="md:pl-8">
                <h3 className="text-lg font-semibold mb-2">Product Details</h3>
                <div className="space-y-2 text-gray-700 text-sm">
                    <div className="flex">
                        <span className="w-32 font-medium">Origin:</span>
                        <span>California, USA</span>
                    </div>
                    <div className="flex">
                        <span className="w-32 font-medium">Cultivation:</span>
                        <span>Organic</span>
                    </div>
                    <div className="flex">
                        <span className="w-32 font-medium">Storage:</span>
                        <span>Refrigerate upon arrival</span>
                    </div>
                    <div className="flex">
                        <span className="w-32 font-medium">Shelf Life:</span>
                        <span>5-7 days when refrigerated</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
