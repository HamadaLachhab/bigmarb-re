import React, { useState } from "react";
import { useRouter } from "next/router";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import pstyle from "../styles/products.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/future/image";
export async function getServerSideProps() {
  let list: any[] = [];
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      list.push(doc.data());
    });
  } catch (e) {
    console.log("error");
  }
  return {
    props: {
      product: JSON.parse(JSON.stringify(list)),
    },
  };
}

function Products({ product }: any) {
  const router = useRouter();
  const { locale, defaultLocale, locales, pathname, query, asPath } = router;
  const [filtered, setFiltered] = useState(product);
  const [active, setActive] = useState("All");
  if (!product) return <h2> no product yet </h2>;
  return (
    <>
      <div className={pstyle.filter_container}>
        <button
          className={active === "All" ? `${pstyle.active}` : ""}
          onClick={() => {
            setActive("All");
            setFiltered(product);
          }}
        >
          {locale === "fr" ? "Tous" : "All"}
        </button>
        <button
          className={active === "marble" ? `${pstyle.active}` : ""}
          onClick={() => {
            setActive("marble");
            const tempfiltered = product.filter(
              (p: any) => p.type === "marble"
            );
            setFiltered(tempfiltered);
          }}
        >
          {locale === "fr" ? "Marbre" : "Marble"}
        </button>
        <button
          className={active === "granite" ? `${pstyle.active}` : ""}
          onClick={() => {
            setActive("granite");
            const tempfiltered = product.filter(
              (p: any) => p.type === "granite"
            );

            setFiltered(tempfiltered);
          }}
        >
          {locale === "fr" ? "Granite" : "Granite"}
        </button>
        <button
          className={active === "pierres" ? `${pstyle.active}` : ""}
          onClick={() => {
            setActive("pierres");
            const tempfiltered = product.filter(
              (p: any) => p.type === "pierres"
            );
            setFiltered(tempfiltered);
          }}
        >
          {locale === "fr" ? "Pierres" : "Stones"}
        </button>
      </div>

      <motion.div layout className={pstyle.popular_movies}>
        <AnimatePresence>
          {filtered.map((p: any) => (
            <motion.div
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              key={p.image}
              className={pstyle.wrap}
            >
              <h2 className={pstyle.head} key={p.image}>
                {p.name}
              </h2>
              <div key={p.image} className={pstyle.image}>
                <Image
                  src={p.image}
                  alt={`${p.name}-${p.type}`}
                  fill
                  style={{
                    objectFit: "cover",
                    borderRadius: "0.3rem",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

export default Products;
