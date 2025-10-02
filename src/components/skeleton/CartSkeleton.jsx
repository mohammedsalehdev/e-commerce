export default function CartSkeleton() {
  return (
    <div className="bg-gray-100 py-8 animate-pulse">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side Skeleton */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="h-7 w-40 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-32 bg-gray-200 rounded mb-4"></div>
              </div>
              {/* Skeleton for cart items */}
              <div className="space-y-6">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-32"></div>
                      <div className="h-3 bg-gray-200 rounded w-24"></div>
                      <div className="flex gap-2">
                        <div className="h-3 w-16 bg-gray-200 rounded"></div>
                        <div className="h-3 w-10 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="w-16 h-6 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="h-5 w-32 bg-gray-200 rounded mb-4"></div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-40 bg-gray-200 rounded"></div>
                <div className="h-10 w-24 bg-gray-200 rounded"></div>
              </div>
              <div className="h-8 w-60 bg-gray-200 rounded mb-2"></div>
            </div>
          </div>

          {/* Right Side Skeleton */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="h-5 w-32 bg-gray-200 rounded mb-4"></div>
              <div className="flex justify-between mb-2">
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                <div className="h-4 w-16 bg-gray-200 rounded"></div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="h-4 w-20 bg-gray-200 rounded"></div>
                <div className="h-4 w-10 bg-gray-200 rounded"></div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="h-4 w-12 bg-gray-200 rounded"></div>
                <div className="h-4 w-14 bg-gray-200 rounded"></div>
              </div>
              <div className="h-px my-4 bg-gray-200"></div>
              <div className="flex justify-between mb-6">
                <div className="h-5 w-20 bg-gray-200 rounded"></div>
                <div className="h-7 w-24 bg-gray-200 rounded"></div>
              </div>
              <div className="h-10 w-full bg-gray-200 rounded mb-2"></div>
              <div className="h-10 w-full bg-gray-100 rounded mb-2"></div>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <div className="flex items-center mb-2">
                  <div className="h-6 w-6 bg-gray-200 rounded-full mr-2"></div>
                  <div className="h-4 w-32 bg-gray-200 rounded"></div>
                </div>
                <div className="h-3 w-40 bg-gray-200 rounded"></div>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg mt-4">
                <div className="flex items-center mb-2">
                  <div className="h-6 w-6 bg-gray-200 rounded-full mr-2"></div>
                  <div className="h-4 w-32 bg-gray-200 rounded"></div>
                </div>
                <div className="h-3 w-40 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
