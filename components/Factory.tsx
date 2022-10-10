import { useRouter } from "next/router";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
const Factory = () => {
  const router = useRouter();
  const { locale, defaultLocale, locales, pathname, query, asPath } = router;

  return (
    <div>
      <div className="flex flex-col space-y-12 items-center justify-center bg-gray-50 w-full py-12">
        <div className="text-center space-y-3 ">
          <p className="text-xl font-medium text-red-600"></p>

          <Link href="/customfit">
            <p className="text-4xl font-light text-gray-600 cursor-pointer">
              {locale === "fr" ? "NOS SERVICES" : "WHAT WE OFFER"}
            </p>
          </Link>
        </div>
        <div className="container px-12  lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-4  lg:space-y-0 space-y-2 w-full">
          <div
            className="col-span-2 row-span-1   bg-no-repeat bg-cover bg-center  h-64"
            style={{
              backgroundImage: `url(/factory1.jpg)`,
            }}
          >
            <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
              <p className="text-white text-2xl font-medium p-8">
                {locale === "fr"
                  ? "Conseil et accompagnement"
                  : "Advice and support"}
              </p>
            </div>
          </div>
          <div
            className="col-span-2 row-span-1  bg-no-repeat bg-cover bg-center  h-64"
            style={{
              backgroundImage: `url(/factory2.jpg)`,
            }}
          >
            <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
              <p className="text-white text-2xl font-medium p-8">
                {locale === "fr" ? "Transport  national" : " transportation"}
              </p>
            </div>
          </div>
          <div
            className="col-span-2 row-span-1  bg-no-repeat bg-cover bg-center  h-64"
            style={{
              backgroundImage: `url(/factory3.jpg)`,
            }}
          >
            <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
              <p className="text-white text-2xl font-medium p-8">
                {locale === "fr"
                  ? "Découpage et façonnage "
                  : " Cutting & shaping"}
              </p>
            </div>
          </div>
          <div
            className="col-span-1 row-span-1    bg-no-repeat bg-cover bg-center  h-64"
            style={{
              backgroundImage: `url(/pro/decor3.jpg)`,
            }}
          >
            <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
              <p className="text-white text-2xl font-medium p-8">
                {locale === "fr" ? "Décors" : "Decors"}
              </p>
            </div>
          </div>
          <div
            className="col-span-1 row-span-1   bg-no-repeat bg-cover bg-center  h-64"
            style={{
              backgroundImage: `url(/pro/decor4.jpg)`,
            }}
          >
            <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-center justify-center">
              <p className="text-white text-2xl font-medium p-8 cursor-pointer">
                <Link href="/decors">
                  <FaArrowRight className="text-5xl text-white   " />
                </Link>
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            router.push("/contactus");
          }}
          type="button"
          className=" text-white  bg-red-700 hover:bg-red-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
        >
          Contact
        </button>
      </div>
    </div>
  );
};
export default Factory;
