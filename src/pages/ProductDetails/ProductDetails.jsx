import ProductInfo from "../../components/ProductInfo/ProductInfo";
import ProtuctDetailsTabs from "../../components/ProtuctDetailsTabs/ProtuctDetailsTabs";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import { useParams } from "react-router";
import Loading from "../../components/Loading/Loading";
import { useProductDetails } from "../../hooks/useProductsDetails";

export default function ProductDetails() {
  const { id } = useParams();
  const { isLoading, isError, error, productDetails } = useProductDetails(id);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ProductInfo productDetails={productDetails} />
      <ProtuctDetailsTabs productDetails={productDetails} />
      <RelatedProducts productDetails={productDetails} />
    </>
  );
}
