import sliderStyle from "../styles/sliderProduct.module.css";
function ProductSlider() {
  return (
    <div className={sliderStyle.mycontainer}>
      {" "}
      <section className={sliderStyle.cardlist}>
        {" "}
        <article className={sliderStyle.maincard}>
          <header>our Product</header>
          <button> look for more</button>
        </article>
        <article className={sliderStyle.card}>
          <header>hola</header>
          <p>
            Lorem ipsum dolor sit, sequi illo vitae nesciunt obcaecati. A fugit
            ipsum est quia!
          </p>
        </article>
        <article className={sliderStyle.card}>
          <header>hola2</header>
          <p>
            Lorem ipsum dolor sit, sequi illo vitae nesciunt obcaecati. A fugit
            ipsum est quia!
          </p>
        </article>
        <article className={sliderStyle.card}>
          <header>hola3</header>
          <p>
            Lorem ipsum dolor sit, sequi illo vitae nesciunt obcaecati. A fugit
            ipsum est quia!
          </p>
        </article>
        <article className={sliderStyle.card}>
          <header>hola</header>
          <p>
            Lorem ipsum dolor sit, sequi illo vitae nesciunt obcaecati. A fugit
            ipsum est quia!
          </p>
        </article>
        <article className={sliderStyle.card}>
          <header>hola</header>
          <p>
            Lorem ipsum dolor sit, sequi illo vitae nesciunt obcaecati. A fugit
            ipsum est quia!
          </p>
        </article>
      </section>
    </div>
  );
}

export default ProductSlider;
