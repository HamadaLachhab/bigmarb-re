import fit from "../styles/fit.module.css";
import Image from "next/image";
import pic1 from "../public/pro/bloc.jpg";
import pic2 from "../public/pro/bloc2.jpg";
import pic3 from "../public/pro/bloc3.jpg";
function bloc() {
  return (
    <div className={fit.wrapper}>
      <section>
        <div className={fit.tranche1}>
          <div className={fit.tranche1main}>
            <h1> BLOC</h1>
            <p>
              Nous exploitons plusieurs carrières de marbre et de pierre
              naturelle Marocaine, nous les façonnons dans notre propre usine de
              dayat ben mimoun au Maroc, et nous le commercialisons en Blocs,
              carreaux ou sur-mesure.
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
          <div className={fit.relative}>
            {" "}
            <Image src={pic3} layout="fill" objectFit="cover" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default bloc;
