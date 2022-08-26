import React, { useState } from "react";
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

function products({ product }: any) {
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
          All
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
          marblre
        </button>
        <button
          className={active === "granite" ? `${pstyle.active}` : ""}
          onClick={() => {
            setActive("granite");
            const tempfiltered = product.filter(
              (p: any) => p.type === "granite"
            );
            console.log(tempfiltered);
            setFiltered(tempfiltered);
          }}
        >
          granite
        </button>
        <button
          className={active === "basalte" ? `${pstyle.active}` : ""}
          onClick={() => {
            setActive("basalte");
            const tempfiltered = product.filter(
              (p: any) => p.type === "basalt"
            );
            setFiltered(tempfiltered);
          }}
        >
          basalte
        </button>
        <button
          className={active === "artwork" ? `${pstyle.active}` : ""}
          onClick={() => {
            setActive("artwork");
            const tempfiltered = product.filter(
              (p: any) => p.type === "artwork"
            );
            setFiltered(tempfiltered);
          }}
        >
          artwork
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
                    borderRadius: "0.8rem",
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

export default products;
