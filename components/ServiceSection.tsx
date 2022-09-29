import Link from "next/link";
import {
  FaCodepen,
  FaGalacticRepublic,
  FaDrawPolygon,
  FaBorderAll,
  FaAngleRight,
} from "react-icons/fa";
import { useRouter } from "next/router";
const ServiceSection = () => {
  const router = useRouter();
  const { locale, defaultLocale, locales, pathname, query, asPath } = router;

  return (
    <div className=" mx-auto lg:grid lg:grid-cols-8 gap-6 py-24 px-14 items-center place-content-center justify-center bg-[url('../public/background.webp')] bg-no-repeat bg-cover bg-center">
      <Link href="/customfit">
        <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center cursor-pointer">
          <FaDrawPolygon className="w-16 h-16 text-red-600 bg-gray-100   p-1" />
          <p className="text-2xl font-medium text-gray-600">
            {locale === "fr" ? "Coupe sur Mesure" : "Custom fit"}
          </p>
          <p>
            <FaAngleRight className="text-4xl font-normal text-red-600 bg-gray-100" />
          </p>
        </div>
      </Link>
      <Link href="/carreaux">
        <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center cursor-pointer">
          <FaBorderAll className="w-16 h-16 text-red-600 bg-gray-100  p-1" />
          <p className="text-2xl font-medium text-gray-600">
            {locale === "fr" ? "Carreaux" : "Tiles"}
          </p>
          <p>
            <FaAngleRight className="text-4xl font-normal text-red-600 bg-gray-100" />
          </p>
        </div>
      </Link>
      <Link href="/bloc">
        <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center cursor-pointer">
          <FaCodepen className="w-16 h-16 text-red-600 bg-gray-100 rounded-full p-1" />
          <p className="text-2xl font-medium text-gray-600">
            {locale === "fr" ? "Bloc" : "Bloc"}
          </p>
          <p>
            <FaAngleRight className="text-4xl font-normal text-red-600 bg-gray-100" />
          </p>
        </div>
      </Link>
      <Link href="/decors">
        <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center cursor-pointer">
          <FaGalacticRepublic className="w-16 h-16 text-red-600 bg-gray-100 rounded-full p-1" />
          <p className="text-2xl font-medium text-gray-600">
            {" "}
            {locale === "fr" ? "Décors" : "Decors"}
          </p>
          <p>
            <FaAngleRight className="text-4xl font-normal text-red-600 bg-gray-100" />
          </p>
        </div>
      </Link>
    </div>
  );
};
export default ServiceSection;
