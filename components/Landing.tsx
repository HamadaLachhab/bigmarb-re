import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import { useRouter } from "next/router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
function Landing() {
  const router = useRouter();
  const { locale, defaultLocale, locales, pathname, query, asPath } = router;

  // import required modules
  return (
    <div className=" h-screen w-full  overflow-hidden">
      <Swiper
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" h-screen bg-[url('../public/pro/five.jpg')] bg-no-repeat bg-cover bg-center">
            <div className="h-screen bg-black bg-opacity-10 ">
              <div className="h-screen flex flex-col justify-center items-center space-y-6 w-full">
                <p className="text-6xl text-black text-center max-w-full ">
                  {locale === "fr" ? (
                    <>
                      le meilleur fournisseur de marbre, granite, et pierre
                      naturelle au
                      <span className="text-red-600  text-center w-5/6">
                        Maroc.
                      </span>
                    </>
                  ) : (
                    <>
                      The World Best Supplier of{" "}
                      <span className="text-red-600  text-center w-5/6">
                        Moroccan
                      </span>{" "}
                      Natural Stone
                    </>
                  )}
                </p>
                <p className="text-2xl font-light text-white text-center ">
                  {locale === "fr"
                    ? "Notre expertise ,un hommage au succès"
                    : "Our expertise,a tribute to success"}
                </p>
                <button
                  type="button"
                  className="text-white  bg-red-700 hover:bg-red-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen bg-[url('../public/pro/decor1.jpg')] bg-no-repeat bg-cover bg-center">
            {" "}
            <div className="h-screen bg-black bg-opacity-10 ">
              <div className="h-screen flex flex-col justify-center items-center space-y-6">
                <p className="text-6xl text-black text-center max-w-full">
                  {locale === "fr" ? (
                    <>
                      le meilleur fournisseur de marbre, granite, et pierre
                      naturelle au
                      <span className="text-red-600  text-center  w-5/6">
                        Maroc.
                      </span>
                    </>
                  ) : (
                    <>
                      The World Best Supplier of{" "}
                      <span className="text-red-600  text-center w-5/6">
                        Moroccan
                      </span>{" "}
                      Natural Stone
                    </>
                  )}
                </p>
                <p className="text-2xl font-light text-white text-center ">
                  {locale === "fr"
                    ? "Notre expertise ,un hommage au succès"
                    : "Our expertise,a tribute to success"}
                </p>
                <button
                  type="button"
                  className="text-white  bg-red-700 hover:bg-red-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen bg-[url('../public/pro/tree.jpg')] bg-no-repeat bg-cover bg-center">
            {" "}
            <div className="h-screen bg-black bg-opacity-10 ">
              <div className="h-screen flex flex-col justify-center items-center space-y-6">
                <p className="text-6xl text-black   text-center max-w-full">
                  {locale === "fr" ? (
                    <>
                      le meilleur fournisseur de marbre, granite, et pierre
                      naturelle au
                      <span className="text-red-600  text-center w-5/6">
                        Maroc.
                      </span>
                    </>
                  ) : (
                    <>
                      The World Best Supplier of{" "}
                      <span className="text-red-600  text-center w-5/6">
                        Moroccan
                      </span>{" "}
                      Natural Stone
                    </>
                  )}
                </p>
                <p className="text-2xl font-light text-white text-center ">
                  {locale === "fr"
                    ? "Notre expertise ,un hommage au succès"
                    : "Our expertise,a tribute to success"}
                </p>
                <button
                  type="button"
                  className="text-white  bg-red-700 hover:bg-red-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
                >
                  {locale === "fr" ? "Contact" : "Contact "}
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Landing;

{
  /* <p className="text-6xl text-black text-center w-5/6 ">
                  {locale === "fr" ? (
                    <>
                      le meilleur fournisseur mondial de pierre naturelle
                      <span className="text-red-600  text-center w-5/6">
                        Marocaine
                      </span>
                    </>
                  ) : (
                    <>
                      The World Best Supplier of{" "}
                      <span className="text-red-600  text-center w-5/6">
                        Moroccan
                      </span>{" "}
                      Natural Stone
                    </>
                  )}
                </p> */
}
