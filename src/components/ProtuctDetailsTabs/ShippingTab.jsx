import React from 'react'

export default function ShippingTab() {
    return (
        <div className="pt-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Shipping & Returns</h3>
            <div className="flex flex-col md:flex-row gap-8">

                <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-700 mb-3">Shipping Information</h4>
                    <div className="space-y-2 text-gray-700 text-sm">
                        <div className="flex">
                            <span className="w-28 font-medium">Standard:</span>
                            <span>3-5 business days ($4.99)</span>
                        </div>
                        <div className="flex">
                            <span className="w-28 font-medium">Express:</span>
                            <span>1-2 business days ($9.99)</span>
                        </div>
                        <div className="flex">
                            <span className="w-28 font-medium">Free shipping:</span>
                            <span>Orders over $50</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-700 mb-3">Return Policy</h4>
                    <div className="space-y-2 text-gray-700 text-sm">
                        <div className="flex">
                            <span className="w-24 font-medium">Time limit:</span>
                            <span>30 days</span>
                        </div>
                        <div className="flex">
                            <span className="w-24 font-medium">Condition:</span>
                            <span>Unopened original packaging</span>
                        </div>
                        <div className="flex">
                            <span className="w-24 font-medium">Refund:</span>
                            <span>Full refund available</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
