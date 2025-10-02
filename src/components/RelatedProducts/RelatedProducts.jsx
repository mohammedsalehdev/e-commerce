import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faStar, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Rating from "../Rating/Rating";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/product-services";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";



export default function RelatedProducts({ productDetails }) {
    const { category } = productDetails
    const [relatedProducts, setRelatedProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);


    async function fetchRelatdProducts() {
        try {
            setIsLoading(true)
            const response = await getAllProducts({ category: category._id })
            if (response.success) {
                setIsLoading(false)
                setRelatedProducts(response.data.data)
            }

        } catch (error) {
            setIsLoading(false)
            setIsError(true)

        }
    }


    useEffect(() => {
        fetchRelatdProducts()
    }, [])

    if (isLoading) {
        return <Loading />
    }




    return (
        <>
            <div className="container mx-auto py-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">You May Also Like</h2>
                    <div className="flex gap-2">
                        <button className="prev-btn btn w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full bg-white hover:bg-primary-200 transition">
                            <FontAwesomeIcon icon={faChevronLeft} className="text-gray-500" />
                        </button>
                        <button className=" next-btn btn w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full bg-white hover:bg-primary-200 transition">
                            <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation]}
                    slidesPerView={5}
                    spaceBetween={10} loop={true}
                    navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}

                >
                    {relatedProducts.map((product) =>
                        <SwiperSlide key={product.id}>
                            <ProductCard productInfo={product} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>

        </>
    )
}
