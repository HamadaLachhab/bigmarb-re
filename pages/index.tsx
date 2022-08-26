import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Contact from "../components/Contact";
import Factory from "../components/Factory";
import Landing from "../components/Landing";
import ProductSlider from "../components/ProductSlider";
import ServiceSection from "../components/ServiceSection";
//import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
          integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
          crossOrigin=""
        />
      </Head>
      <Landing />
      <ServiceSection />
      <ProductSlider />
      <Factory />
      <Contact />
    </>
  );
};

export default Home;
