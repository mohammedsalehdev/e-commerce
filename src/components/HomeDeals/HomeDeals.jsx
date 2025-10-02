import { Link } from "react-router";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { calcTimeLeft } from "../../utils/counterDown";
import useProducts from "../../hooks/useProducts";
import HomeDealsSkeleton from "../skeleton/HomeDealsSkeleton";
export default function HomeDeals() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const { products, isLoading, isError, error } = useProducts();

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calcTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);
    return function () {
      clearInterval(timer);
    };
  }, []);

  if (isLoading) {
    return <HomeDealsSkeleton />;
  }

  const deals = products.filter((product) => product.priceAfterDiscount).slice(0, 5);

  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-3">Deals of the Day</h2>
              <div className="flex gap-2 items-center">
                <p>Offers ends in:</p>
                <div className="counter flex gap-2 items-center">
                  <div className="size-7 text-sm bg-gray-900 text-white rounded-md flex justify-center items-center">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </div>
                  <span>:</span>
                  <div className="size-7 text-sm bg-gray-900 text-white rounded-md flex justify-center items-center">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </div>
                  <span>:</span>
                  <div className="size-7 text-sm bg-gray-900 text-white rounded-md flex justify-center items-center">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>
            <Link className="text-primary-600 hover:text-primary-700 transition-colors duration-200" to={`/deals`}>
              View All Deals
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 py-6">
            {deals.map((product) => (
              <ProductCard key={product.id} productInfo={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
