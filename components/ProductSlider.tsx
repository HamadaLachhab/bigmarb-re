import sliderStyle from "../styles/sliderProduct.module.css";
import { FaArrowRight } from "react-icons/fa";
function ProductSlider() {
  return (
    <section className={sliderStyle.cardlist}>
      {" "}
      <article className={sliderStyle.maincard}>
        <header>
          <h2>
            {" "}
            <span>Product</span>{" "}
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
