import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAllProducts } from "../../services/product-services";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";

export default function CategoriesProducts() {
  const [subCategoriesProducts, setSubCategoriesProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id: categoryId } = useParams();

  async function handleCategoriesProducts() {
    try {
      setIsLoading(true);
      const response = await getAllProducts({ category: categoryId });
      if (response.success) {
        setIsLoading(false);
        setSubCategoriesProducts(response.data.data);
      }
    } catch (error) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (categoryId) {
      handleCategoriesProducts();
    }
  }, [categoryId]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto py-10 gap-5 grid md:grid-cols-3 lg:grid-cols-5">
      {subCategoriesProducts?.length ? (
        subCategoriesProducts.map((product) => (
          <div key={product.id} className="">
            <ProductCard productInfo={product} />
          </div>
        ))
      ) : (
        <div className="col-span-full text-center text-gray-400">There is no products at this Categories</div>
      )}
    </div>
  );
}
