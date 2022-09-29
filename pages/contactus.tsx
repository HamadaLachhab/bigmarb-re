import { useRouter } from "next/router";
import Contact from "../components/Contact";
import Image from "next/image";
import map from "../public/map.jpg";

function contactus() {
  const router = useRouter();
  const { locale, defaultLocale, locales, pathname, query, asPath } = router;
  return (
    <div>
      <div className=" bg-[url('../public/pro/five.jpg')] bg-no-repeat bg-cover bg-center  h-72">
        <div className="bg-black   bg-opacity-50 w-full h-full  flex items-center justify-center">
          <p className="text-white text-5xl font-light  p-8">
            {locale === "fr" ? "Contactez-nous" : "Contact us"}
          </p>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-2 w-full">
        <div className="col-span-1 p-24 flex flex-col space-y-8 sm:p-9">
          <p className="text-2xl text-gray-600">
            Big Marbre <br />
          </p>
          <p className="border-solid border border-red-500  w-1/6 "></p>
          <p className="text-xl font-light text-gray-500">
            194. Rue l'argentine route Sefrou <br /> zohour 2 blvd ismailia Fes
            Morocco
          </p>
          <p className="text-xl font-light text-gray-500">
            Phone: (+212) 535725647 <br />
            Landline: (+212) 535618524
          </p>
          <p className="text-xl font-light text-gray-500 ">
            Email: bigmarbrekm @gmail.com
          </p>
        </div>
        <div className="col-span-1 bg-gray-100 p-24 flex flex-col space-y-8 sm:p-9">
          <p className="text-2xl text-gray-600">FACTORY</p>
          <p className="border-solid border border-red-500  w-1/6 "></p>
          <p className="text-xl font-light text-gray-500">
            dayat ben mimoun. Douar wlad mhamed Commune Ain bida Fes.
          </p>
          <p className="text-2xl text-gray-600">WAREHOUSE</p>
          <p className="border-solid border border-red-500  w-1/6 "></p>
          <p className="text-xl font-light text-gray-500">
            Road El Jadida Km 13.5, Casablanca, Morocco
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default contactus;
