import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaPhoneAlt,
  FaMapMarkedAlt,
  FaRegClock,
  FaAngleRight,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneSquareAlt,
  FaVoicemail,
  FaCalendarWeek,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import Logo from "../public/bigmarbre.png";
const Footer = () => {
  const router = useRouter();
  const { locale, defaultLocale, locales, pathname, query, asPath } = router;
  return (
    <div>
      <div className="bg-gray-200  py-16 px-16">
        <div className="container  mx-auto flex flex-col space-y-22 gap-8">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="col-span-1 flex flex-row space-x-3">
              <FaMapMarkedAlt className="w-12 h-12 text-red-600  p-1" />
              <div className="space-y-2">
                <p className="text-gray-500">
                  {" "}
                  {locale === "fr" ? "Adresse" : "Address"}
                </p>
                <p className="text-gray-600 font-medium">
                  194. Rue l'argentine route Sefrou zohour 2 blvd ismailia Fes
                  Morocco
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-row space-x-3">
              <FaPhoneAlt className="w-12 h-12 text-red-600  p-1" />
              <div className="space-y-2">
                <p className="text-gray-500">
                  {" "}
                  {locale === "fr" ? "Telephone" : "Phone"}
                </p>
                <p className="text-gray-600 font-medium">+212535725647</p>
              </div>
            </div>
            <div className="col-span-1 flex flex-row space-x-3">
              <FaRegClock className="w-12 h-12 text-red-600  p-1" />
              <div className="space-y-2">
                <p className="text-gray-500">
                  {" "}
                  {locale === "fr" ? "Horaire du travail" : "Work schedule"}
                </p>
                <p className="text-gray-600 font-medium">
                  {locale === "fr"
                    ? "Lundi-Samedi : 09:00 - 18:00"
                    : "MON-SAT: 09:00 - 18:00"}{" "}
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="col-span-1 space-y-8">
              <Image src={Logo} alt="Logo" />

              <p className="text-gray-500">
                {locale === "fr"
                  ? "Big Marbre est un acteur majeur dans son secteur. Elle industrialise et commercialise le marbre, le granit et les pierres naturelles de toutes sortes."
                  : "  Big Marbre is a major player in its sector. It indsutrializes  and markets marble, granite and natural stones of all kinds."}
              </p>
            </div>
            <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-gray-600 font-medium">
                  {" "}
                  {locale === "fr" ? "PLAN DU SITE" : "WEBSITE MAP"}
                </p>
                <p className="border-solid border-2 bg-red-500 border-red-500  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <Link href="/">
                    <p className="text-gray-500 cursor-pointer">
                      {locale === "fr" ? "Accueil" : "Home"}
                    </p>
                  </Link>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <Link href="/customfit">
                    <p className="text-gray-500 cursor-pointer">
                      {locale === "fr" ? "Services" : "Services"}
                    </p>
                  </Link>
                </div>

                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <Link href="/About">
                    <p className="text-gray-500 cursor-pointer">
                      {locale === "fr" ? "Présentation" : "About"}
                    </p>
                  </Link>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <Link href="/products">
                    <p className="text-gray-500 cursor-pointer">
                      {locale === "fr" ? "Catalogue" : "product"}
                    </p>
                  </Link>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <Link href="/contactus">
                    <p className="text-gray-500 cursor-pointer">
                      {locale === "fr" ? "Contactez-nous" : "Contact us"}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-gray-600 font-medium">BIG MARBRE</p>
                <p className="border-solid border bg-red-500 border-red-500  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row items-center space-x-4">
                  <FaMapMarkerAlt className="w-10 h-6 text-gray-500  font-light" />
                  <p className="text-gray-500">
                    Road El Jadida Km 13.5, Casablanca ,Morocco
                  </p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaPhone className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500">+212535725647</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaPhoneSquareAlt className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500">+212535618524</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaVoicemail className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500"> bigmarbrekm@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-gray-600 font-medium">
                  {locale === "fr" ? "Contactez-nous" : "Contact us"}{" "}
                </p>
                <p className="border-solid border bg-red-500 border-red-500  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-4">
                <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium   w-full sm:w-auto px-5 py-2.5 text-center ">
                  {locale === "fr" ? "CONTACTEZ-NOUS" : "CONTACT US"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py- container mx-auto flex flex-row justify-between">
        <p>Copyright BigrMarbre</p>
        <div className="flex flex-row space-x-3">
          <FaFacebook className="w-5 h-5 text-gray-500" />
          <FaInstagram className="w-5 h-5 text-gray-500" />
          <FaWhatsapp className="w-5 h-5 text-gray-500" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
