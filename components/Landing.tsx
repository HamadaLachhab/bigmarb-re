import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
function Landing() {
  // import required modules
  return (
    <div className="top-[-20px]">
      <div className=" h-screen w-screen ">
        <Swiper
          effect={"fade"}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" h-screen bg-[url('../public/slider/img1.jpg')] bg-no-repeat bg-cover bg-center">
              <div className="h-screen bg-black bg-opacity-10 ">
                <div className="h-screen flex flex-col justify-center items-center space-y-6">
                  <p className="text-6xl text-black text-center ">
                    {" "}
                    The World Best Supplier of{" "}
                    <span className="text-red-600">Moroccan</span> Natural Stone
                  </p>
                  <p className="text-2xl font-light text-white ">
                    A chauffer Service for Any Purpose
                  </p>
                  <button
                    type="button"
                    className="text-white  bg-red-700 hover:bg-red-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
                  >
                    CONTACT US
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-screen bg-[url('../public/slider/img2.jpg')] bg-no-repeat bg-cover bg-center">
              {" "}
              <div className="h-screen bg-black bg-opacity-10 ">
                <div className="h-screen flex flex-col justify-center items-center space-y-6">
                  <p className="text-6xl text-black text-center">
                    {" "}
                    The World Best Supplier of{" "}
                    <span className="text-red-600">Moroccan</span> Natural Stone{" "}
                  </p>
                  <p className="text-2xl font-light text-white ">
                    A chauffer Service for Any Purpose
                  </p>
                  <button
                    type="button"
                    className="text-white  bg-red-700 hover:bg-red-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
                  >
                    CONTACT US
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-screen bg-[url('../public/slider/img3.jpg')] bg-no-repeat bg-cover bg-center">
              {" "}
              <div className="h-screen bg-black bg-opacity-10 ">
                <div className="h-screen flex flex-col justify-center items-center space-y-6">
                  <p className="text-6xl text-black text-center ">
                    {" "}
                    The World Best Supplier of{" "}
                    <span className="text-red-700">Moroccan</span> Natural Stone{" "}
                  </p>
                  <p className="text-2xl font-light text-white ">
                    A chauffer Service for Any Purpose
                  </p>
                  <button
                    type="button"
                    className="text-white  bg-red-600 hover:bg-red-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
                  >
                    CONTACT US
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Landing;
