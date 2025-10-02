export default function ProductCardSkeleton() {
  return (
    <div className="card rounded-xl shadow-lg overflow-hidden relative bg-white animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-60 bg-gray-200" />
      <div className="p-4 space-y-3">
        {/* Category & Title Skeleton */}
        <div>
          <div className="h-3 w-20 bg-gray-200 rounded mb-2"></div>
          <div className="h-5 w-36 bg-gray-200 rounded"></div>
        </div>

        {/* Ratings Skeleton */}
        <div className="flex gap-2 items-center">
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
          <div className="h-3 w-6 bg-gray-200 rounded"></div>
          <div className="h-3 w-8 bg-gray-200 rounded"></div>
        </div>

        {/* Price & Button Skeleton */}
        <div className="flex justify-between items-center">
          <div className="space-x-2 flex items-center">
            <div className="h-5 w-20 bg-gray-200 rounded"></div>
            <div className="h-4 w-14 bg-gray-100 rounded"></div>
          </div>
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      {/* Actions Skeleton */}
      <div className="actions absolute top-4 right-4 flex flex-col gap-4">
        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
      </div>
      {/* Discount Badge Skeleton */}
      <div className="absolute top-4 left-4">
        <div className="h-6 w-14 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
