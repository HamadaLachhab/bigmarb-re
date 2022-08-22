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
  return (
    <div>
      <div className="bg-gray-200 py-16 px-16">
        <div className="container mx-auto flex flex-col space-y-22 gap-8">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="col-span-1 flex flex-row space-x-3">
              <FaMapMarkedAlt className="w-12 h-12 text-red-600  p-1" />
              <div className="space-y-2">
                <p className="text-gray-500">ADDRESS</p>
                <p className="text-gray-600 font-medium">
                  194. Rue l'argentine route Sefrou zohour 2 blvd ismailia Fes
                  Morocco
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-row space-x-3">
              <FaPhoneAlt className="w-12 h-12 text-red-600  p-1" />
              <div className="space-y-2">
                <p className="text-gray-500">PHONES</p>
                <p className="text-gray-600 font-medium">+212535725646</p>
              </div>
            </div>
            <div className="col-span-1 flex flex-row space-x-3">
              <FaRegClock className="w-12 h-12 text-red-600  p-1" />
              <div className="space-y-2">
                <p className="text-gray-500">WORKING HOURS</p>
                <p className="text-gray-600 font-medium">
                  MON-SAT: 08:00 - 17:00 <br />
                  SUN: CLOSED
                </p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="col-span-1 space-y-8">
              <Image src={Logo} alt="Logo" />

              <p className="text-gray-500">
                Big Marbre is a major player in its sector. It indsutrializes
                and markets marble, granite and natural stones of all kinds.
              </p>
            </div>
            <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-gray-600 font-medium">PLAN DU SITE</p>
                <p className="border-solid border border-red-500  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">Acceuil</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">Présentation</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">Produit</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">Devis en ligne</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-gray-600 font-medium">BIG MARBRE</p>
                <p className="border-solid border border-red-500  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row items-center space-x-4">
                  <FaMapMarkerAlt className="w-10 h-6 text-gray-500  font-light" />
                  <p className="text-gray-500">
                    194. Rue l'argentine route Sefrou zohour 2 blvd ismailia Fes
                    Morocco
                  </p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaPhone className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500">+212535725646</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaPhoneSquareAlt className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500">+212535618524</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaVoicemail className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500"> bigmarbre@gmail.com</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaCalendarWeek className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500">Mon-Sat: 09:00 - 17:00</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-gray-600 font-medium">Devis </p>
                <p className="border-solid border border-red-500  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-4">
                <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium   w-full sm:w-auto px-5 py-2.5 text-center ">
                  Devis enligne
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py- container mx-auto flex flex-row justify-between">
        <p>Copyright&copy; BigrMarbre</p>
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
