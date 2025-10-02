import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router";
import { getBrands } from "../../services/brand-services";
export default function Brands() {
  const [brands, setBrands] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  async function handleGetBrands() {
    try {
      setIsLoading(true);
      const response = await getBrands();
      console.log(response);

      if (response.success) {
        setIsLoading(false);
        setBrands(response?.data.data);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }
  useEffect(() => {
    handleGetBrands();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto">
          <div className="brand grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
            {brands?.map((brand) => {
              return (
                <Link to={`/brand/${brand._id}`} key={brand._id} className="flex items-center justify-center flex-col shadow-lg gap-6 p-3">
                  <img src={brand.image} alt={brand.name} />
                  <h3>{brand.name}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
