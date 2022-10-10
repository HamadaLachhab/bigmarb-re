import fit from "../styles/fit.module.css";
import Image from "next/image";
import pic1 from "../public/pro/carreaux1.jpg";
import pic2 from "../public/pro/carreaux2.jpg";
import pic3 from "../public/pro/six.jpg";

function Carreaux() {
  return (
    <div className={fit.wrapper}>
      <header className={fit.header}>
        <h3> Carreaux</h3>
      </header>
      <section>
        <div className={fit.tranche1}>
          <div className={fit.tranche1main}>
            <h1> Carreaux</h1>
            <p>
              Un vaste stock et choix de minéraux en marbre, granite, pierre
              naturelle de toutes dimensions pour des projets simples ou
              d'envergures…
            </p>
          </div>
          <div className={fit.relative}>
            {" "}
            <Image
              src={pic1}
              alt={"carreaux"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className={fit.tranche1}>
          <div className={fit.relative}>
            {" "}
            <Image
              src={pic2}
              alt={"carreaux"}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={fit.relative}>
            {" "}
            <Image
              src={pic3}
              alt={"carreaux"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Carreaux;
