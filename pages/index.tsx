import type { NextPage } from "next";

import Contact from "../components/Contact";
import Factory from "../components/Factory";
import Landing from "../components/Landing";
import ProductSlider from "../components/ProductSlider";
import ServiceSection from "../components/ServiceSection";
//import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Landing />
      <ServiceSection />
      <ProductSlider />
      <Factory />
      <Contact />
    </>
  );
};

export default Home;
