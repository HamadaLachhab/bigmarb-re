import Image from "next/image";
import Image1 from "../public/about1.jpg";
import Image2 from "../public/factory1.jpg";
import Image3 from "../public/factory1.jpg";
import { FaCheck, FaMale, FaGlobe } from "react-icons/fa";
function about() {
  return (
    <div>
      {/* Content */}
      <div>
        <div className=" bg-[url('../public/slider/img2.jpg')] bg-no-repeat bg-cover bg-center  h-72">
          <div className="bg-black   bg-opacity-50 w-full h-full  flex items-center justify-center">
            <p className="text-white text-5xl font-light  p-8">About Us</p>
          </div>
        </div>
        <div className="container mx-auto lg:grid lg:grid-cols-2 gap-16 py-24 px-16">
          <div className="col-span-1 space-y-8 text-gray-600">
            <h2 className="text-4xl font-medium  ">Who we are ?</h2>
            <p className="border-solid border border-red-500  w-1/6 "></p>
            <p className="text-l text-gray-500">
              <span className="px-4"></span> Located near the city of Fez,{" "}
              <span className="text-red-700">BIG MARBRE</span> is a major player
              in its sector. It industrializes and markets marble ,granite and
              natural stones of all kinds
              <br />
              <span className="px-4"></span>The company has an area of 20,000
              square meters with a fleet of sophisticated machine as a
              production line of a much higher per month
              <br />
              <span className="px-4"></span>The company has a portfolio of
              clients that consists of real estate companies, public works
              companies, home. Our development strategy is very ambitious, we
              aim to expand our activity to cover all Morocco then NOrth African
              market and then to expand to Europe, Asia and America in a few
              years.
            </p>
            <div className="space-y-3 text-gray-500">
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-red-500  p-2" />
                <p>A well qualified and committed employees</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-10 h-10 border rounded-full text-red-500  p-2" />
                <p>
                  A client oriented strategy leading to a perfect listening to
                  the customer's needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <Image src={Image1} alt="Picture of the author" />
          </div>
        </div>
        <div className="bg-gray-100 flex items-center justify-center text-center">
          <div className="container mx-auto py-24 px-16 space-y-2">
            <p className="text-xl font-medium text-red-600">
              COMMITMENT TO WORK
            </p>
            <p className="text-4xl font-light text-gray-600">Our Competences</p>
            <div className="grid lg:grid-cols-2 gap-12 py-8">
              <div className="col-span-1 bg-white space-y-3">
                <Image src={Image2} alt="Picture of the author" />

                <div className="space-y-5 p-8">
                  <p className="text-xl font-medium text-red-600">VARIETY</p>
                  <p className=" text-lg text-gray-500">
                    Products in different textures and colors respecting a
                    strict quality that allow the customer to have greater
                    choice and better usability
                  </p>
                </div>
              </div>
              <div className="col-span-1 bg-white space-y-3">
                <Image src={Image3} alt="Picture of the author" />

                <div className="space-y-5 p-8">
                  <p className="text-xl font-medium text-red-600">INNOVATION</p>
                  <p className="text-lg  text-gray-500">
                    A significant investment in new technologies marking our
                    process of industrialization modern and exemplary
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col items-center justify-center text-center py-24  space-y-2">
          <p className="text-xl font-medium text-red-600">OUR FLEET</p>
          <p className="text-4xl font-light text-gray-600">Browse Our Limos</p>
          <div className="lg:grid lg:grid-cols-3 gap-12 px-4 py-24 w-full">
            <div className="col-span-1 flex flex-col space-y-3 border border-gray-300">
              <div
                className="bg-no-repeat bg-cover bg-center w-full h-64"
                style={{
                  backgroundImage: `url(/image_10-1-768x512.jpg)`,
                }}
              >
                <div className="bg-black  bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-xl  p-8">Audi A8</p>
                </div>
              </div>
              <div className="py-1 flex flex-row space-x-2 items-center justify-center">
                <FaMale className="w-5 h-5 text-gray-500" />
                <p className="border rounded-full p-2 text-gray-500">4</p>
                <FaGlobe className="w-5 h-5 text-gray-500" />
                <p className="border rounded-full p-2 text-gray-500">4</p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col space-y-3 border border-gray-300">
              <div
                className="bg-no-repeat bg-cover bg-center w-full h-64"
                style={{
                  backgroundImage: `url(/image_10-1-768x512.jpg)`,
                }}
              >
                <div className="bg-black  bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-xl  p-8">Audi A8</p>
                </div>
              </div>
              <div className="py-1 flex flex-row space-x-2 items-center justify-center">
                <FaMale className="w-5 h-5 text-gray-500" />
                <p className="border rounded-full p-2 text-gray-500">4</p>
                <FaGlobe className="w-5 h-5 text-gray-500" />
                <p className="border rounded-full p-2 text-gray-500">4</p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col space-y-3 border border-gray-300">
              <div
                className="bg-no-repeat bg-cover bg-center w-full h-64"
                style={{
                  backgroundImage: `url(/image_10-1-768x512.jpg)`,
                }}
              >
                <div className="bg-black  bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-xl  p-8">Audi A8</p>
                </div>
              </div>
              <div className="py-1 flex flex-row space-x-2 items-center justify-center">
                <FaMale className="w-5 h-5 text-gray-500" />
                <p className="border rounded-full p-2 text-gray-500">4</p>
                <FaGlobe className="w-5 h-5 text-gray-500" />
                <p className="border rounded-full p-2 text-gray-500">4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Content */}
    </div>
  );
}

export default about;
