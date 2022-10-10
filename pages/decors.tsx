import fit from "../styles/fit.module.css";
import Image from "next/image";
import pic1 from "../public/pro/decor1.jpg";
import pic2 from "../public/decor2.jpg";
import pic3 from "../public/pro/decor2.jpg";
import pic4 from "../public/pro/decor3.jpg";
import pic5 from "../public/decor3.jpg";

function Decors() {
  return (
    <div className={fit.wrapper}>
      <header className={fit.header}>
        <h3> Décors</h3>
      </header>
      <section>
        <div className={fit.tranche1}>
          <div className={fit.tranche1main}>
            <h1> Décors</h1>
            <p>
              Big Marbre vous propose un travail sur mesure, précis et
              artistique , de finition parfaite, dans des délais courts: un
              travail adapté à vos besoins et répondant à vos exigences.
            </p>
          </div>
          <div className={fit.relative}>
            {" "}
            <Image src={pic1} alt={"decors"} layout="fill" objectFit="cover" />
          </div>
        </div>

        <div className={fit.tranche1}>
          <div className={fit.relative}>
            {" "}
            <Image src={pic2} alt={"decors"} layout="fill" objectFit="cover" />
          </div>
          <div className={fit.relative}>
            {" "}
            <Image src={pic3} alt={"decors"} layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className={fit.tranche1}>
          <div className={fit.relative}>
            {" "}
            <Image src={pic4} alt={"decors"} layout="fill" objectFit="cover" />
          </div>
          <div className={fit.relative}>
            {" "}
            <Image src={pic5} alt={"decors"} layout="fill" objectFit="cover" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Decors;
