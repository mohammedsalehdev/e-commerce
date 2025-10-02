import ProductCardSkeleton from "./ProductCardSkeleton";

export default function FeaturedProductsSkeleton() {
  return (
    <section>
      <div className="container mx-auto animate-pulse">
        <div className="h-7 w-56 bg-gray-200 rounded mb-6"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {[...Array(5)].map((_, idx) => (
            <ProductCardSkeleton key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
