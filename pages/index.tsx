import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Landing from "../components/Landing";
import ProductSlider from "../components/ProductSlider";
import ServiceSection from "../components/ServiceSection";
//import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Landing />
    </>
  );
};

export default Home;
