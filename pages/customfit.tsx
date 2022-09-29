import Image from "next/image";
import pic1 from "../public/pro/tranche.jpg";
import pic2 from "../public/pro/tranche1.jpg";
import pic4 from "../public/bain2.jpg";
import pic5 from "../public/bain3.jpg";
import pic6 from "../public/cuisine1.jpg";
import fit from "../styles/fit.module.css";
function customfit() {
  return (
    <>
      <div className={fit.wrapper}>
        <header className={fit.header}>
          <h3> Coupe sur mesure</h3>
          <p>
            Big Marbre vous invite à visiter sa marbrerie . Ouvert aux
            particuliers et aux professionnels, notre dépôt dispose d’un stock
            exclusif de tranches de minéraux au Maroc . Vous pourrez bénéficier
            sur place d’un devis, de conseils personnalisés ainsi que des
            services de découpe sur mesure.
          </p>
        </header>
        <section>
          <div className={fit.tranche1}>
            <div className={fit.tranche1main}>
              <h1> LES TRANCHES DE MINÉRAUX</h1>
              <p>
                Un vaste stock et choix de minéraux en marbre, granite, pierre
                naturelle de toutes dimensions pour des projets simples ou
                d'envergures…
              </p>
            </div>
            <div className={fit.relative}>
              {" "}
              <Image src={pic1} layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className={fit.tranche1}>
            <div className={fit.relative}>
              {" "}
              <Image src={pic2} layout="fill" objectFit="cover" />
            </div>
            <div className={fit.tranche1main}>
              <h1> LA DÉCOUPE SUR MESURE</h1>
              <p>
                Nous découpons sur place votre minéral aux dimensions souhaitées
                à l'aide de nos machines à 5 axes dernier cri : Débiteuse ou
                découpeuse à jet pour les formes les plus complexes…
              </p>
            </div>
          </div>
          <div className={fit.tranche1}>
            <div className={fit.tranche1main}>
              <h1> EXPLOITATION</h1>
              <p>
                <br />
              </p>
            </div>
            <div className={fit.relative}>
              {" "}
              <Image src={pic4} layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className={fit.tranche1}>
            <div className={fit.relative}>
              {" "}
              <Image src={pic5} layout="fill" objectFit="cover" />
            </div>
            <div className={fit.relative}>
              {" "}
              <Image src={pic6} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default customfit;
