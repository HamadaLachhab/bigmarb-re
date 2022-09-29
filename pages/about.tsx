import { useRouter } from "next/router";
import Image from "next/image";
import Image1 from "../public/pro/five.jpg";
import Image2 from "../public/variety.jpg";
import Image3 from "../public/pro/bloc2.jpg";
import { FaCheck, FaMale, FaGlobe } from "react-icons/fa";
function About() {
  const router = useRouter();
  const { locale, defaultLocale, locales, pathname, query, asPath } = router;

  return (
    <div>
      {/* Content */}
      <div>
        <div className=" bg-[url('../public/pro/seven.jpg')] bg-no-repeat bg-cover bg-center  h-72">
          <div className="bg-black   bg-opacity-50 w-full h-full  flex items-center justify-center">
            <p className="text-white text-5xl font-light max-w-full  w-full p-8">
              {locale === "fr" ? "Présentation" : "About Us"}
            </p>
          </div>
        </div>
        <div className="container mx-auto lg:grid lg:grid-cols-2 gap-16 py-24 px-16">
          <div className="col-span-1 space-y-8 text-gray-600">
            <h2 className="text-4xl font-medium  ">
              {locale === "fr" ? "QUI SOMMES-NOUS" : "WHO WE ARE"}
            </h2>
            <p className="border-solid border border-red-500  w-1/6 "></p>
            <p className="text-l text-gray-500">
              {locale === "fr" ? (
                <>
                  <span className="px-4"></span>Situé près de la ville de Fès,{" "}
                  <span className="text-red-700">BIG MARBRE</span> est un acteur
                  majeur dans son secteur. Elle industrialise et commercialise
                  le marbre, le granite et les pierres naturelles de toutes
                  sortes.
                  <br />
                  <span className="px-4"></span>L'entreprise dispose d'une
                  superficie de 20.000 mètres carrés avec un parc de machines
                  sophistiquées ainsi qu'une ligne de production importante par
                  mois.
                  <br />
                  <span className="px-4"></span>L'entreprise a un portefeuille
                  de clients qui se compose de sociétés immobilières, de
                  sociétés de travaux publics, d'habitation. Notre stratégie de
                  développement est très ambitieuse, nous avons pour objectif
                  d'étendre notre activité pour couvrir tout le marché marocain
                  puis nord africain.
                </>
              ) : (
                <>
                  <span className="px-4"></span> Located near the city of Fez,{" "}
                  <span className="text-red-700">BIG MARBRE</span> is a major
                  player in its sector. It industrializes and markets marble
                  ,granite and natural stones of all kinds
                  <br />
                  <span className="px-4"></span>The company has an area of
                  20,000 square meters with a fleet of sophisticated machine as
                  a production line of a much higher per month
                  <br />
                  <span className="px-4"></span>The company has a portfolio of
                  clients that consists of real estate companies, public works
                  companies, home. Our development strategy is very ambitious,
                  we aim to expand our activity to cover all Morocco then NOrth
                  African market and then to expand to Europe, Asia and America
                  in a few years.
                </>
              )}
            </p>
            <div className="space-y-3 text-gray-500">
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-red-500  p-2" />
                <p>
                  {" "}
                  {locale === "fr"
                    ? "Un personnel qualifié et engagé"
                    : "A well qualified and committed employees"}
                </p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-10 h-10 border rounded-full text-red-500  p-2" />
                <p>
                  {locale === "fr"
                    ? "Une stratégie orientée vers le client qui se traduit par une écoute parfaite des besoins du client."
                    : " A client oriented strategy leading to a perfect listening to the customer's needs."}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <Image src={Image1} alt="Picture of the author" />
          </div>
        </div>
        <div className="bg-red-50 flex items-center justify-center text-center">
          <div className="container mx-auto py-24 px-16 space-y-2">
            <p className="text-xl font-medium text-red-600">
              {locale === "fr"
                ? "L'ENGAGEMENT AU TRAVAIL"
                : " COMMITMENT TO WORK"}
            </p>
            <p className="text-4xl font-light text-gray-600">
              {" "}
              {locale === "fr" ? "Nos Compétence" : "Our Competences"}
            </p>
            <div className="grid lg:grid-cols-2 gap-12 py-8">
              <div className="col-span-1 bg-white space-y-3">
                <Image src={Image2} alt="Picture of the author" />

                <div className="space-y-5 p-8">
                  <p className="text-xl font-medium text-red-600">
                    {" "}
                    {locale === "fr" ? "VARIÉTÉ" : "VARIETY"}
                  </p>
                  <p className=" text-lg text-gray-500">
                    {locale === "fr"
                      ? "Produits en différentes textures et couleurs respectant une qualité stricte qui permettent au client d'avoir un plus grand choix et une meilleure facilité d'utilisation"
                      : `Products in different textures and colors respecting a
                    strict quality that allow the customer to have greater
                    choice and better usability`}
                  </p>
                </div>
              </div>
              <div className="col-span-1 bg-white space-y-3">
                <Image src={Image3} alt="Picture of the author" />

                <div className="space-y-5 p-8">
                  <p className="text-xl font-medium text-red-600">INNOVATION</p>
                  <p className="text-lg  text-gray-500">
                    {locale === "fr"
                      ? `Un investissement important dans les nouvelles technologies marquant notre processus d'industrialisation moderne et exemplaire`
                      : "A significant investment in new technologies marking our  process of industrialization modern and exemplary"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Content */}
    </div>
  );
}

export default About;
