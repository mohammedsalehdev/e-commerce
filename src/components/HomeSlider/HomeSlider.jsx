import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import HomeSliderImg from "../../assets/images/home-slider-1.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function HomeSlider() {
  return (
    <>
      <Swiper loop={true} modules={[Pagination, Navigation]} pagination={{ clickable: true }} navigation={true}>
        <SwiperSlide>
          <div style={{ backgroundImage: `url('${HomeSliderImg}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="overlay py-32 bg-gradient-to-r from-primary-600/75 to-primary-600/45 text-white">
              <div className="container mx-auto space-y-3">
                <h2 className="text-2xl font-bold">
                  Fresh Organic Produce <br /> Delivered to Your Door
                </h2>
                <p>Get 20% off on your first order with code: FRESH20</p>
                <div className="space-x-3">
                  <button className="btn hover:bg-gray-200 text-primary-600 border-1 bg-white border-white">Shop Now</button>
                  <button className="btn hover:bg-white hover:text-primary-600 text-white border-1 border-white bg-transparent">
                    View Deals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ backgroundImage: `url('${HomeSliderImg}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="overlay py-32 bg-gradient-to-r from-primary-600/75 to-primary-600/45 text-white">
              <div className="container mx-auto space-y-3">
                <h2 className="text-2xl font-bold">
                  Fresh Organic Produce <br /> Delivered to Your Door
                </h2>
                <p>Get 20% off on your first order with code: FRESH20</p>
                <div className="space-x-3">
                  <button className="btn hover:bg-gray-200 text-primary-600 border-1 bg-white border-white">Shop Now</button>
                  <button className="btn hover:bg-white hover:text-primary-600 text-white border-1 border-white bg-transparent">
                    View Deals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ backgroundImage: `url('${HomeSliderImg}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="overlay py-32 bg-gradient-to-r from-primary-600/75 to-primary-600/45 text-white">
              <div className="container mx-auto space-y-3">
                <h2 className="text-2xl font-bold">
                  Fresh Organic Produce <br /> Delivered to Your Door
                </h2>
                <p>Get 20% off on your first order with code: FRESH20</p>
                <div className="space-x-3">
                  <button className="btn hover:bg-gray-200 text-primary-600 border-1 bg-white border-white">Shop Now</button>
                  <button className="btn hover:bg-white hover:text-primary-600 text-white border-1 border-white bg-transparent">
                    View Deals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
