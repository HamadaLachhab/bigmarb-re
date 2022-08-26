import React from "react";
import Contact from "../components/Contact";

function contactus() {
  return (
    <div>
      <div className=" bg-[url('../public/slider/img2.jpg')] bg-no-repeat bg-cover bg-center  h-72">
        <div className="bg-black   bg-opacity-50 w-full h-full  flex items-center justify-center">
          <p className="text-white text-5xl font-light  p-8">Contact Us</p>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2">
        <div className="col-span-1 p-24 flex flex-col space-y-8">
          <p className="text-2xl text-gray-600">
            AutoRide <br />
            Transportation Services
          </p>
          <p className="border-solid border border-red-500  w-1/6 "></p>
          <p className="text-xl font-light text-gray-500">
            2507 Parker Boulevard
            <br /> Oakland, CA 76107
          </p>
          <p className="text-xl font-light text-gray-500">
            Phone: (620) 255 7005 <br />
            Toll Free: (825) 840 0440
          </p>
          <p className="text-xl font-light text-gray-500">
            Email: info@autoride.com
          </p>
        </div>
        <div className="col-span-1 bg-gray-100 p-24 flex flex-col space-y-8">
          <p className="text-2xl text-gray-600">Chairman of the Board</p>
          <p className="border-solid border border-red-500  w-1/6 "></p>
          <p className="text-xl font-light text-gray-500">
            Mark Peter
            <br /> Phone: (620) 252 8021, Fax: (620) 252 8022 <br />
            Email: mark.peter@autoride.com
          </p>
          <p className="text-2xl text-gray-600">Director of Development</p>
          <p className="border-solid border border-red-500  w-1/6 "></p>
          <p className="text-xl font-light text-gray-500">
            John Green
            <br /> Phone: (620) 252 8021, Fax: (620) 252 8022 <br />
            Email: mark.peter@autoride.com
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default contactus;
