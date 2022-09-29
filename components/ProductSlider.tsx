import sliderStyle from "../styles/sliderProduct.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
function ProductSlider() {
  const router = useRouter();
  const { locale, defaultLocale, locales, pathname, query, asPath } = router;

  return (
    <section className={sliderStyle.cardlist}>
      {" "}
      <article className={sliderStyle.maincard}>
        <header>
          <h2>
            {" "}
            <Link href="/products">
              <span>{locale === "fr" ? "Catalogue" : "Products"}</span>
            </Link>{" "}
            <span className={sliderStyle.arrow}>
              <FaArrowRight />
            </span>
          </h2>
        </header>
      </article>
      <article className={sliderStyle.card}>
        <header></header>
      </article>
      <article className={sliderStyle.card}>
        <header></header>
      </article>
      <article className={sliderStyle.card}>
        <header></header>
      </article>
      <article className={sliderStyle.card}>
        <header></header>
      </article>
      <article className={sliderStyle.card}>
        <header></header>
      </article>
    </section>
  );
}

export default ProductSlider;
