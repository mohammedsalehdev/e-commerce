import ProductCardSkeleton from "./ProductCardSkeleton";

export default function HomeDealsSkeleton() {
  return (
    <section>
      <div className="container mx-auto animate-pulse">
        <div className="flex justify-between items-center">
          <div>
            <div className="h-7 w-48 bg-gray-200 rounded mb-3"></div>
            <div className="flex gap-2 items-center">
              <div className="h-4 w-28 bg-gray-200 rounded"></div>
              <div className="counter flex gap-2 items-center">
                <div className="size-7 bg-gray-300 rounded-md"></div>
                <span className="text-gray-400">:</span>
                <div className="size-7 bg-gray-300 rounded-md"></div>
                <span className="text-gray-400">:</span>
                <div className="size-7 bg-gray-300 rounded-md"></div>
              </div>
            </div>
          </div>
          <div className="h-5 w-28 bg-gray-200 rounded"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 py-6">
          {[...Array(5)].map((_, idx) => (
            <ProductCardSkeleton key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
