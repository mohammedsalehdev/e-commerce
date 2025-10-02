import ProductCard from "../ProductCard/ProductCard";
import useProducts from "../../hooks/useProducts";
import FeaturedProductsSkeleton from "../skeleton/FeaturedProductsSkeleton";

export default function FeaturedProducts() {
  const { products, isLoading, isError, error } = useProducts();

  if (isLoading) {
    return <FeaturedProductsSkeleton />;
  }

  return (
    <>
      <section>
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {products.map((product) => (
              <ProductCard key={product.id} productInfo={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
