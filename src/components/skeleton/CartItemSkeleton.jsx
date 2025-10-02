export default function CartItemSkeleton() {
  return (
    <div className="divide-y divide-gray-200 animate-pulse">
      <div className="py-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-4">
            <div className="w-20 h-20 bg-gray-200 rounded-lg" />
          </div>
          <div className="flex-grow space-y-2">
            <div className="h-4 bg-gray-200 rounded w-40 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-24 mb-2"></div>
            <div className="flex items-center space-x-2">
              <div className="h-3 w-16 bg-gray-200 rounded"></div>
              <div className="h-3 w-10 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 flex items-center gap-4">
          <div className="inline-flex items-center border border-gray-300 rounded-md bg-gray-100">
            <div className="w-8 h-8 bg-gray-200 rounded-l"></div>
            <div className="w-6 h-4 bg-gray-200 mx-1 rounded"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-r"></div>
          </div>
          <div className="flex items-center justify-between min-w-[115px]">
            <div className="flex flex-col items-end">
              <div className="h-5 w-16 bg-gray-200 rounded mb-1"></div>
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded ml-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
