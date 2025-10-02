import Rating from "../Rating/Rating";

export default function ReviewsTab() {
    return (
        <div className="pt-2">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Customer Reviews</h3>
                <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-4 py-2 rounded transition">
                    Write a Review
                </button>
            </div>

            <div className="flex items-center gap-3 mb-1">
                <div className="flex text-yellow-400 text-xl">
                    <Rating rating={4.5} />
                </div>
                <span className="text-gray-700 font-medium text-lg">4.5 out of 5</span>
            </div>
            <div className="text-gray-500 text-sm mb-6">Based on 149 reviews</div>

            <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                    <div className="flex text-yellow-400 text-base">
                        <Rating rating={5} />
                    </div>
                    <span className="font-semibold text-gray-800">John D.</span>
                    <span className="text-gray-400 text-xs ml-auto">2 days ago</span>
                </div>
                <div className="text-gray-700 text-sm">
                    "Absolutely delicious! The strawberries were fresh, sweet, and perfectly ripe. Will definitely order again."
                </div>
            </div>

            <div className="mb-6 border-t border-gray-100 pt-4">
                <div className="flex items-center gap-2 mb-1">
                    <div className="flex text-yellow-400 text-base">
                        <Rating rating={4} />
                    </div>
                    <span className="font-semibold text-gray-800">Sarah M.</span>
                    <span className="text-gray-400 text-xs ml-auto">1 week ago</span>
                </div>
                <div className="text-gray-700 text-sm">
                    "Great quality organic strawberries. They lasted longer than expected in the fridge."
                </div>
            </div>
        </div>
    );
}
